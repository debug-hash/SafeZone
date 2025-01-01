import os

from flask import Flask
from flask_migrate import Migrate

from .config import Config
from .extensions import db, api, login_manager, bcrypt, cors, jwt
from .models import Category
from .config import config_type
from .resources import category_ns, product_ns, user_ns, token_ns
from .admin import admin_manager
from .dao import load_users


def create_app(config_name="dev"):
    app = Flask(__name__)

    app.config.from_object(config_type[config_name])

    db.init_app(app)
    migrate = Migrate(app, db)
    login_manager.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    cors.init_app(app)

    with app.app_context():
        db.create_all()

    api.init_app(app)
    api.add_namespace(category_ns)
    api.add_namespace(product_ns)
    api.add_namespace(user_ns)
    api.add_namespace(token_ns)

    admin_manager.init_app(app)

    @jwt.user_identity_loader
    def user_identity_lookup(user):
        return user.id

    @jwt.user_lookup_loader
    def user_lookup_callback(_jwt_header, jwt_data):
        identity = jwt_data["sub"]
        return load_users(id=identity)

    @login_manager.user_loader
    def load_user(user_id):
        return load_users(id=user_id)

    return app
