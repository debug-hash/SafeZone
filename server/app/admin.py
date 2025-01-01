from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

from .models import db, Category, Product




admin_manager = Admin(name="eSale 🛒", template_mode="bootstrap4")


admin_manager.add_view(ModelView(Category, db.session))
admin_manager.add_view(ModelView(Product, db.session))
