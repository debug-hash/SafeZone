from app.models import Category, Product, Tag, User
from app import create_app, db


def seed_data():
    app = create_app()

    with app.app_context():
        db.session.query(User).delete()
        db.session.query(Category).delete()
        db.session.query(Product).delete()
        db.session.query(Tag).delete()

        admin = User(
            username="ADMIN", email="admin@gmail.com", password="admin", is_admin=True
        )
        db.session.add(admin)
        db.session.commit()
        print("Admin have been added to the database.")

        categories = [
            Category(title="Mobile"),
            Category(title="Tablet"),
            Category(title="Laptop"),
            Category(title="TV"),
        ]

        db.session.bulk_save_objects(categories)
        db.session.commit()
        print(f"{len(categories)} categories have been added to the database.")

        tags = [
            Tag(label="Electronics"),
            Tag(label="Gadgets"),
            Tag(label="Home"),
            Tag(label="Office"),
        ]

        db.session.bulk_save_objects(tags)
        db.session.commit()
        print(f"{len(tags)} tags have been added to the database.")

        mobile_category = Category.query.filter_by(title="Mobile").first()
        laptop_category = Category.query.filter_by(title="Laptop").first()
        electronics_tag = Tag.query.filter_by(label="Electronics").first()
        gadgets_tag = Tag.query.filter_by(label="Gadgets").first()

        products = [
            Product(
                title="iPhone 15",
                description="Newest Apple iPhone with A17 chip.",
                price=999.99,
                image="https://example.com/images/iphone15.jpg",
                category_id=mobile_category.id,
                tags=[electronics_tag, gadgets_tag],
            ),
            Product(
                title="MacBook Pro",
                description="High performance laptop for professionals.",
                price=2499.99,
                image="https://example.com/images/macbookpro.jpg",
                category_id=laptop_category.id,
                tags=[electronics_tag],
            ),
        ]
        for product in products:
            db.session.add(product)

        db.session.commit()

        print(f"{len(products)} products have been added to the database.")


if __name__ == "__main__":
    seed_data()
