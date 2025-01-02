from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from flask_admin.form import SecureForm

from .models import db, Category, Product, Tag


class CommonView(ModelView):
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


class CategoryView(CommonView):
    column_list = ["title", "products"] + CommonView.column_list
    column_editable_list = ["title"] + CommonView.column_editable_list


class ProductView(CommonView):
    inline_models = [Tag]
    column_list = ["title", "category"] + CommonView.column_list
    column_searchable_list = ["title"]
    column_editable_list = [
        "title",
        "category",
    ] + CommonView.column_editable_list
    column_sortable_list = ["title"] + CommonView.column_sortable_list


class TagView(CommonView):
    column_list = ["label", "products"] + CommonView.column_list
    column_sortable_list = ["label"] + CommonView.column_sortable_list
    column_editable_list = ["label"] + CommonView.column_editable_list


admin_manager = Admin(name="eSale 🛒", template_mode="bootstrap4")

admin_manager.add_view(CategoryView(Category, db.session, category="Management"))
admin_manager.add_view(ProductView(Product, db.session, category="Management"))
admin_manager.add_view(TagView(Tag, db.session, category="Management"))
