import cloudinary
from secrets import token_hex, token_urlsafe
from os import path, getenv
from dotenv import load_dotenv
from datetime import timedelta

load_dotenv()

base_dir = path.abspath(path.dirname(__file__))
file_path = path.join(path.dirname(__file__), "static")
cdn_ckeditor = ["//cdn.ckeditor.com/4.6.0/full-all/ckeditor.js"]


class Config:
    SECRET_KEY = token_hex()
    JWT_SECRET_KEY = token_urlsafe(24)
    FLASK_ADMIN_SWATCH = "lux"
    REMEMBER_COOKIE_DURATION = timedelta(days=7)

    cloudinary.config(
        cloud_name=getenv("CLOUD_NAME"),
        api_key=getenv("API_KEY"),
        api_secret=getenv("API_SECRET"),
    )


class DevConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///" + path.join(base_dir, "database", "esale.db")
    SQLALCHEMY_TRACK_MODIFICATIONS = True


class ProdConfig(Config):
    DEBUG = False


class TestConfig(Config):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = "sqlite:///:memory:"
    SQLALCHEMY_TRACK_MODIFICATIONS = False


config_type = dict(dev=DevConfig, prod=ProdConfig, test=TestConfig)
