import pytest

from app import create_app, db


@pytest.fixture(scope="module")
def app():
    app = create_app(config_name="test")

    with app.app_context():
        db.create_all()
        yield app
        db.drop_all()


@pytest.fixture(scope="module")
def client(app):
    return app.test_client()


@pytest.fixture(scope="module")
def runner(app):
    return app.test_cli_runner()
