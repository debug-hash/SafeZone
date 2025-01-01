from flask_restx import fields

from .extensions import api


common_model = api.model(
    "Common",
    {
        "id": fields.Integer(readonly=True, description="Unique ID"),
        "active": fields.Boolean,
        "date_created": fields.DateTime(dt_format="iso8601"),
    },
)


category_model = api.model(
    "Category",
    {**common_model, "title": fields.String},
)


product_model = api.model(
    "Product",
    {
        **category_model,
        "description": fields.String,
        "image": fields.String,
        "price": fields.Float,
        "tags": fields.List(fields.String, description="List of tags"),
    },
)


user_model = api.model(
    "Current User",
    {
        "username": fields.String(required=True),
        "email": fields.String(required=True),
        "first_name": fields.String(required=True),
        "last_name": fields.String(required=True),
        "avatar": fields.String(required=False),
        "phone": fields.String(required=False),
    },
)

new_user_model = api.model(
    "User",
    {
        **user_model,
        "password": fields.String(required=True),
    },
)

login_model = api.model(
    "Log In",
    {"email": fields.String(required=True), "password": fields.String(required=True)},
)
