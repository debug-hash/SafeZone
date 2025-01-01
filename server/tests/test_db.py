from app import db


def test_database(app):
    with app.app_context():
        from app.models import Category

        test = Category(title="Smartwatch")
        db.session.add(test)
        db.session.commit()

        assert Category.query.count() == 1
