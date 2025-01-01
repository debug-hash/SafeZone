from .models import Category, Product, User


def load_categories():
    return Category.query.filter(Category.active.__eq__(True)).all()


def load_products(category=None, keyword=None, min_price=None, max_price=None, **kwarg):
    queries = Product.query.filter(Product.active.__eq__(True))

    if category:
        queries = queries.filter(Product.category_id.__eq__(category))

    if keyword:
        queries = queries.filter(Product.title.contains(keyword))

    if min_price:
        queries = queries.filter(Product.price.__ge__(min_price))

    if max_price:
        queries = queries.filter(Product.price.__le__(max_price))

    return queries.order_by(Product.title).all()


def load_product(id=None):
    return Product.query.get(int(id))


def load_users(id=None):
    return User.query.filter(User.active.__eq__(True), User.id.__eq__(id)).first()


def create_user(username, email, password, **kwargs):
    user = User(username=username, email=email, password=password, **kwargs)
    user.save()
    return user


def check_user_duplicates(username, email):
    errors = {}
    if User.query.filter(User.username.__eq__(username)).first():
        errors["username"] = "Username is already taken"

    if User.query.filter(User.email.__eq__(email)).first():
        errors["email"] = "Email is already registered"

    return errors


def auth_user(email, password):
    user = User.query.filter(User.email.__eq__(email)).first()
    return user if user and user.check_password(password=password) else None
