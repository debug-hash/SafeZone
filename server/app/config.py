import cloudinary
from secrets import token_hex
from os import path, getenv
from dotenv import load_dotenv

load_dotenv()

base_dir = path.abspath(path.dirname(__file__))


class Config:
    SECRET_KEY = token_hex()
    FLASK_ADMIN_SWATCH = "lux"

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
