from flask_admin import Admin, BaseView, expose
from flask_admin.contrib.sqla import ModelView
from flask_admin.form import SecureForm
from flask_wtf.file import FileField, FileAllowed
from flask_admin.actions import action
from flask_babel import Babel
from flask_login import current_user, logout_user
from flask import redirect, url_for
from flask_admin.contrib.fileadmin import FileAdmin

from .decorators import admin_required
from .widgets import CKTextAreaField
from .models import db, Category, Product, Tag
from .utils import upload_image, get_locale
from .actions import change_active
from .config import file_path, cdn_ckeditor


class AuthView(BaseView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.is_admin


class CommonView(ModelView, AuthView):
    form_base_class = SecureForm
    column_list = ["active", "date_created"]
    column_filters = ["active"]
    column_editable_list = ["active"]
    column_sortable_list = ["date_created"]
    create_modal = True
    edit_modal = True
    can_view_details = True
    can_export = True
    can_delete = True
    page_size = 10

    @action(
        "change_active",
        "Change Active",
        "Are you sure you want to change the active status of selected models?",
    )
    def action_active(self, ids):
        return change_active(self=self, ids=ids)


class CategoryView(CommonView):
    column_list = ["title", "products"] + CommonView.column_list
    column_editable_list = ["title"] + CommonView.column_editable_list


class ProductView(CommonView):
    extra_js = cdn_ckeditor
    form_overrides = {"description": CKTextAreaField}

    form_extra_fields = {
        "image": FileField(
            "Product Image",
            validators=[FileAllowed(["jpg", "png"], "Only images are allowed!")],
        )
    }

    inline_models = [Tag]
    column_list = ["title", "image", "price", "category"] + CommonView.column_list
    column_searchable_list = ["title"]
    column_filters = ["price"] + CommonView.column_filters
    column_editable_list = [
        "title",
        "price",
        "image",
        "category",
    ] + CommonView.column_editable_list
    column_sortable_list = ["title"] + CommonView.column_sortable_list

    def on_model_change(self, form, model, is_created):
        if "image" in form.data and form.data["image"]:
            file = form.data["image"]
            model.image = upload_image(file)


class TagView(CommonView):
    column_list = ["label", "products"] + CommonView.column_list
    column_sortable_list = ["label"] + CommonView.column_sortable_list
    column_editable_list = ["label"] + CommonView.column_editable_list


class AnalyticsView(AuthView):
    @expose("/")
    def index(self):
        return self.render("admin/analytics.html")


class LogoutView(AuthView):
    @admin_required
    @expose("/")
    def index(self):
        logout_user()
        return redirect(url_for("admin.index"))


class UploadFileView(FileAdmin, AuthView):
    pass


babel = Babel(locale_selector=get_locale)

admin_manager = Admin(name="eSale 🛒", template_mode="bootstrap4")

admin_manager.add_view(CategoryView(Category, db.session, category="Management"))
admin_manager.add_view(ProductView(Product, db.session, category="Management"))
admin_manager.add_view(TagView(Tag, db.session, category="Management"))
admin_manager.add_view(
    AnalyticsView(name="Analytics & Statistics", endpoint="analytics-statistics")
)
admin_manager.add_view(
    UploadFileView(
        file_path, "/static/", name="Files", category="Settings", endpoint="files"
    )
)
admin_manager.add_view(
    LogoutView(name="Log Out", category="Settings", endpoint="logout")
)
