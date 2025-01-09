from sqlalchemy import (
    Column,
    String,
    Integer,
    Boolean,
    DateTime,
    Text,
    Float,
    ForeignKey,
)
from sqlalchemy.orm import relationship
from datetime import datetime
from flask_login import UserMixin
from flask_bcrypt import generate_password_hash, check_password_hash

from .extensions import db
from .utils import hash_avatar_url


class Common(db.Model):
    __abstract__ = True

    id = Column(Integer, primary_key=True, autoincrement=True)
    active = Column(Boolean, default=True)
    date_created = Column(DateTime, default=datetime.utcnow)

    def save(self):
        db.session.add(self)
        db.session.commit()


class User(Common, UserMixin):
    username = Column(String(80), unique=True)
    email = Column(String(125), unique=True)
    password = Column(String(255))
    avatar = Column(String(225), default=None)
    first_name = Column(String(80), nullable=True)
    last_name = Column(String(80), nullable=True)
    phone = Column(String(10), nullable=True)
    is_admin = Column(Boolean, default=False)

    orders = relationship("Order", backref="user", lazy=True)
    comments = relationship("Comment", backref="user", lazy=True)

    def __init__(self, *args, **kwargs):
        super(User, self).__init__(*args, **kwargs)
        self.password = generate_password_hash(kwargs.get("password"), 10)
        if not self.avatar:
            self.avatar = hash_avatar_url(email=self.email)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __str__(self):
        return self.username


class Category(Common):
    title = Column(String(80), unique=True)

    products = relationship("Product", backref="category", lazy=True)

    def __str__(self):
        return self.title


class Tag(Common):
    label = Column(String(50), unique=True)

    def __str__(self):
        return self.label


class Product(Common):
    title = Column(String(80), unique=True)
    description = Column(Text)
    price = Column(Float, default=0.00)
    image = Column(String(255))

    category_id = Column(Integer, ForeignKey(Category.id))
    tags = relationship("Tag", secondary="product_tag", backref="product", lazy=True)
    comments = relationship("Comment", backref="product", lazy=True)
    details = relationship("OrderDetails", backref="product", lazy=True)

    def __str__(self):
        return self.title


product_tag = db.Table(
    "product_tag",
    Column("product_id", Integer, ForeignKey(Product.id), nullable=False),
    Column("tag_id", Integer, ForeignKey(Tag.id), nullable=False),
)


class Order(Common):
    user_id = Column(Integer, ForeignKey(User.id))
    details = relationship("OrderDetails", backref="order", lazy=True)


class OrderDetails(Common):
    quantity = Column(Integer, default=0)
    unit_price = Column(Float, default=0.00)

    order_id = Column(Integer, ForeignKey(Order.id))
    product_id = Column(Integer, ForeignKey(Product.id))


class Interaction(Common):
    __abstract__ = True

    user_id = Column(Integer, ForeignKey(User.id))
    product_id = Column(Integer, ForeignKey(Product.id))


class Comment(Interaction):
    content = Column(Text)

    def __str__(self):
        return self.title
