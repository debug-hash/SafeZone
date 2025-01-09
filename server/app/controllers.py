from flask import request, url_for, flash, redirect
from flask_login import login_user

from .dao import auth_user

import stripe


def login_admin():
    email = request.form.get("email")
    password = request.form.get("password")
    remember = request.form.get("remember")

    user = auth_user(email=email, password=password)

    if user and user.is_admin:
        login_user(user, remember=remember)
        flash("Welcome, admin! You are successfully logged in.", "success")
    else:
        flash("Invalid email or password. Please try again.", "warning")

    return redirect(url_for("admin.index"))


def create_payment():
    try:
        data = request.get_json()
        amount = data["amount"]

        # Tạo PaymentIntent
        payment_intent = stripe.PaymentIntent.create(
            amount=amount,
            currency="usd",
            metadata={"integration_check": "accept_a_payment"},
        )

        return jsonify({"client_secret": payment_intent.client_secret})
    except Exception as e:
        return jsonify(error=str(e)), 403
