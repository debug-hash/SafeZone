from flask_restx import reqparse
from werkzeug.datastructures import FileStorage

product_parser = reqparse.RequestParser(bundle_errors=True)

product_parser.add_argument(
    "category", type=int, required=False, help="Category ID", location="args"
)
product_parser.add_argument(
    "keyword", type=str, required=False, help="Search keyword", location="args"
)
product_parser.add_argument(    
    "min_price", type=float, required=False, help="Minimum price", location="args"
)
product_parser.add_argument(
    "max_price", type=float, required=False, help="Maximum price", location="args"
)

user_parser = reqparse.RequestParser(bundle_errors=True)

user_parser.add_argument("username", type=str, required=True, location="form")
user_parser.add_argument("email", type=str, required=True, location="form")
user_parser.add_argument("first_name", type=str, required=True, location="form")
user_parser.add_argument("last_name", type=str, required=True, location="form")
user_parser.add_argument("password", type=str, required=True, location="form")
user_parser.add_argument("phone", type=str, required=False, location="form")
user_parser.add_argument("avatar", type=FileStorage, required=False, location="files")
