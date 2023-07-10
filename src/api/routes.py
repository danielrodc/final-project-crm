from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

# /users endpoints


@api.route('/users', methods=['POST'])
def add_user():
    if request.method == "POST":
        data = request.json
        if data.get("email") is None:
            return jsonify({"message": "Wrong property"}), 400
        if data.get("password") is None:
            return jsonify({"message": "Wrong property"}), 400
        if data.get("department") is None:
            return jsonify({"message": "Wrong property"}), 400
        if data.get("name") is None:
            return jsonify({"message": "Wrong property"}), 400
        if data.get("last_name") is None:
            return jsonify({"message": "Wrong property"}), 400
        if data.get("city") is None:
            return jsonify({"message": "Wrong property"}), 400
        if data.get("country") is None:
            return jsonify({"message": "Wrong property"}), 400

        user = User.query.filter_by(email=data.get("email")).first()
        if user is not None:
            return jsonify({"message": "The user all ready exist"})

        if user is None:
            user = User(email=data["email"], password=data["password"],
                        department=data["department"], name=data["name"],
                        last_name=data["last_name"], city=data["city"],
                        country=data["country"])
            db.session.add(user)

            try:
                db.session.commit()
                return jsonify(data), 201

            except Exception as error:
                print(error)
                return jsonify({"message": error.args}), 500
