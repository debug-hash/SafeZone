from flask_restx import Resource, Namespace, abort
from flask import jsonify
from flask_jwt_extended import (
    jwt_required,
    current_user,
    create_access_token,
    create_refresh_token,
)

from .dao import (
    load_categories,
    load_products,
    load_product,
    create_user,
    check_user_duplicates,
    auth_user,
    load_users,
)
from .dto import category_model, product_model, new_user_model, login_model, user_model
from .parsers import product_parser, user_parser
from .utils import upload_image


category_ns = Namespace("categories", description="Categories operations")
product_ns = Namespace("products", description="Products operations")
user_ns = Namespace("users", description="Users operations")
token_ns = Namespace("token", description="Token operations")


@category_ns.route("/")
class CategoryResource(Resource):
    @category_ns.doc("list_categories")
    @category_ns.marshal_list_with(category_model)
    def get(self):
        """List all categories"""
        return load_categories()


@product_ns.route("/")
class ProductResource(Resource):
    @product_ns.doc("list_products")
    @product_ns.marshal_list_with(product_model, code=200, envelope="results")
    @product_ns.expect(product_parser)
    def get(self):
        """List all products"""
        args = product_parser.parse_args()
        return load_products(**args)


@product_ns.route("/<int:id>/")
@product_ns.param("id", "An ID")
@product_ns.response(404, "Not found")
class ProductResource(Resource):
    @product_ns.marshal_with(product_model, code=200)
    def get(self, id):
        """Get product"""
        return load_product(id=id) or abort(404, message="Not found")


@user_ns.route("/")
class UserResource(Resource):
    @user_ns.expect(user_parser)
    @user_ns.marshal_with(new_user_model, code=201)
    def post(self):
        """Create user account"""
        avatar_url = None
        args = user_parser.parse_args()
        avatar = args["avatar"]

        errors = check_user_duplicates(args["username"], args["email"])
        if errors:
            abort(400, message="Validation failed", errors=errors)

        if avatar:
            avatar_url = upload_image(file_data=avatar)

        new_user = create_user(
            username=args["username"],
            email=args["email"],
            password=args["password"],
            first_name=args["first_name"],
            last_name=args["last_name"],
            avatar=avatar_url,
            phone=args["phone"],
        )
        return new_user


@token_ns.route("/")
class TokenResource(Resource):
    @token_ns.expect(login_model)
    def post(self):
        """Get access token"""
        user = auth_user(
            email=token_ns.payload["email"], password=token_ns.payload["password"]
        )
        if not user:
            return jsonify(message="Invalid email or password"), 401
        access_token = create_access_token(identity=user, fresh=True)
        refresh_token = create_refresh_token(identity=user)
        return jsonify(access_token=access_token, refresh_token=refresh_token)


@user_ns.route("/current-user/")
class CurrentUserResource(Resource):
    method_decorators = [jwt_required(optional=True)]
    @user_ns.doc(security="jwt")
    @user_ns.marshal_with(user_model, code=200)
    def get(self):
        """Get current user"""
        return load_users(id=current_user.id)
