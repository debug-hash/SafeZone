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
                image="https://source.unsplash.com/500x500/?iphone",
                category_id=mobile_category.id,
                tags=[electronics_tag, gadgets_tag],
            ),
            Product(
                title="MacBook Pro",
                description="High performance laptop for professionals.",
                price=2499.99,
                image="https://source.unsplash.com/500x500/?macbook",
                category_id=laptop_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Samsung Galaxy S23",
                description="Flagship smartphone with AMOLED display.",
                price=799.99,
                image="https://source.unsplash.com/500x500/?samsung",
                category_id=mobile_category.id,
                tags=[electronics_tag, gadgets_tag],
            ),
            Product(
                title="Dell XPS 13",
                description="Ultra-thin laptop with powerful performance.",
                price=1499.99,
                image="https://source.unsplash.com/500x500/?laptop",
                category_id=laptop_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Apple Watch Series 8",
                description="Smartwatch with advanced health tracking features.",
                price=399.99,
                image="https://source.unsplash.com/500x500/?apple-watch",
                category_id=laptop_category.id,
                tags=[electronics_tag, gadgets_tag],
            ),
            Product(
                title="Sony WH-1000XM5",
                description="Noise-cancelling wireless headphones.",
                price=349.99,
                image="https://source.unsplash.com/500x500/?headphones",
                category_id=mobile_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="GoPro Hero 11",
                description="Action camera with 5K video and HyperSmooth 5.0 stabilization.",
                price=499.99,
                image="https://source.unsplash.com/500x500/?gopro",
                category_id=laptop_category.id,
                tags=[electronics_tag, gadgets_tag],
            ),
            Product(
                title="LG OLED TV",
                description="4K OLED TV with perfect blacks and stunning color.",
                price=1999.99,
                image="https://source.unsplash.com/500x500/?tv",
                category_id=laptop_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Bose QuietComfort Earbuds",
                description="True wireless earbuds with exceptional sound and noise-cancelling.",
                price=279.99,
                image="https://source.unsplash.com/500x500/?earbuds",
                category_id=laptop_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Microsoft Surface Pro 9",
                description="Versatile laptop-tablet hybrid with a high-resolution display.",
                price=1299.99,
                image="https://source.unsplash.com/500x500/?tablet",
                category_id=laptop_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Samsung QLED 4K TV",
                description="Stunning 4K resolution and smart TV functionality.",
                price=1499.99,
                image="https://source.unsplash.com/500x500/?qled-tv",
                category_id=laptop_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Google Pixel 8",
                description="Smartphone with stock Android experience and great camera.",
                price=799.99,
                image="https://source.unsplash.com/500x500/?pixel-phone",
                category_id=mobile_category.id,
                tags=[electronics_tag, gadgets_tag],
            ),
            Product(
                title="HP Spectre x360",
                description="Convertible laptop with 4K touch display and long battery life.",
                price=1799.99,
                image="https://source.unsplash.com/500x500/?hp-laptop",
                category_id=laptop_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Fujifilm X-T4",
                description="Mirrorless camera with 4K video and high-quality image output.",
                price=1699.99,
                image="https://source.unsplash.com/500x500/?camera",
                category_id=mobile_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Sony A7 IV",
                description="Full-frame mirrorless camera with impressive autofocus.",
                price=2499.99,
                image="https://source.unsplash.com/500x500/?mirrorless-camera",
                category_id=mobile_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Nintendo Switch OLED",
                description="Handheld gaming console with vibrant OLED display.",
                price=349.99,
                image="https://source.unsplash.com/500x500/?gaming-console",
                category_id=mobile_category.id,
                tags=[electronics_tag, gadgets_tag],
            ),
            Product(
                title="Apple iPad Air",
                description="Lightweight tablet with powerful performance and great display.",
                price=599.99,
                image="https://source.unsplash.com/500x500/?ipad",
                category_id=mobile_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Razer Blade 15",
                description="Gaming laptop with powerful specs and fast refresh rate.",
                price=1999.99,
                image="https://source.unsplash.com/500x500/?gaming-laptop",
                category_id=laptop_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Beats Studio3 Wireless",
                description="Noise-cancelling over-ear headphones with great sound.",
                price=349.99,
                image="https://source.unsplash.com/500x500/?beats-headphones",
                category_id=mobile_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Oculus Quest 2",
                description="Standalone VR headset for immersive experiences.",
                price=299.99,
                image="https://source.unsplash.com/500x500/?vr-headset",
                category_id=mobile_category.id,
                tags=[electronics_tag, gadgets_tag],
            ),
            Product(
                title="Bose SoundLink Revolve",
                description="Portable Bluetooth speaker with 360-degree sound.",
                price=199.99,
                image="https://source.unsplash.com/500x500/?bluetooth-speaker",
                category_id=mobile_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Amazon Echo Dot 4th Gen",
                description="Compact smart speaker with Alexa voice control.",
                price=49.99,
                image="https://source.unsplash.com/500x500/?smart-speaker",
                category_id=mobile_category.id,
                tags=[electronics_tag],
            ),
            Product(
                title="Logitech MX Master 3",
                description="Ergonomic wireless mouse for productivity.",
                price=99.99,
                image="https://source.unsplash.com/500x500/?wireless-mouse",
                category_id=mobile_category.id,
                tags=[electronics_tag],
            ),
        ]

        for product in products:
            db.session.add(product)

        db.session.commit()

        print(f"{len(products)} products have been added to the database.")


if __name__ == "__main__":
    seed_data()
