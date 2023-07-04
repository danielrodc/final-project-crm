"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

@api.route('/users', methods=['GET'])
def get_users():
    users = User()
    users = users.query.all()
    users = list(map(lambda item: item.serialize(), users))
    return jsonify(users), 200

@api.route('/users/<int:user_id>', methods=['GET'])
def get_one_user(user_id = None):
    if user_id is not None:
        users = User()
        users = users.query.get(user_id)
        return jsonify(users.serialize()), 200

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200