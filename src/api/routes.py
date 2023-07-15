from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Customer, Project
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

# /users endpoints


@api.route('/projects/<int:project_id>', methods=['PUT'])
def edit_project():
    data = request.json
    project = Project.query.filter_by(
        project_id=data.get("project_id")).first()
    # db.session.delete(project)
    # db.session.commit()

    # for project in data:
    #     project = Project(project_name=data["project_name"], account_manager_id=data["account_manager_id"],
    #                       assistant_id=data["assistant_id"], customer_id=data["customer_id"], description=data["description"])
    #     db.session.add(project)

    #     try:
    #         db.session.commit()
    #         return jsonify(data), 201

    #     except Exception as error:
    #         print(error)
    #         return jsonify({"message": error.args}), 500


@api.route('/projects', methods=['POST'])
def add_project():
    data = request.json
    if data.get("project_name") is None:
        return jsonify({"message": "Wrong property"}), 400
    if data.get("account_manager_id") is None:
        return jsonify({"message": "Wrong property"}), 400
    if data.get("assistant_id") is None:
        return jsonify({"message": "Wrong property"}), 400
    if data.get("customer_id") is None:
        return jsonify({"message": "Wrong property"}), 400

    project = Project.query.filter_by(
        project_name=data.get("project_name")).first()

    if project is not None:
        return jsonify({"message": "The user all ready exist"})

    if project is None:
        project = Project(project_name=data["project_name"], account_manager_id=data["account_manager_id"],
                          assistant_id=data["assistant_id"], customer_id=data["customer_id"], description=data["description"])
        db.session.add(project)
        try:
            db.session.commit()
            return jsonify(data), 201

        except Exception as error:
            print(error)
            return jsonify({"message": error.args}), 500


@api.route('/users', methods=['GET'])
def get_users():
    users = User()
    users = users.query.all()
    if users is not None:
        users = list(map(lambda item: item.serialize(), users))
        return jsonify(users), 200
    else:
        return jsonify({"message": "no users found"}), 404


@api.route('/users/<int:user_id>', methods=['GET'])
def get_one_user(user_id=None):
    if user_id is not None:
        users = User()
        users = users.query.get(user_id)
        if users is not None:
            return jsonify(users.serialize()), 200
        else:
            return jsonify({"message": "user not found"}), 404
    else:
        return jsonify({"message": "bad request"}), 400


@api.route('/users/<department>', methods=['GET'])
def get_department(department=None):
    if department == "hr" or department == "sales" or department == "finances" or department == "trial" or department == "recruitment":
        users = User()
        users = users.query.filter_by(department=department).all()
        users = list(map(lambda item: item.serialize(), users))
        if len(users) != 0:
            return jsonify(users), 200
        else:
            return jsonify({"message": "no users found"}), 404
    else:
        return jsonify({"message": "bad request"}), 400


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

# /customers endpoints


@api.route('/customers', methods=['GET'])
def get_customers():
    customers = Customer()
    customers = customers.query.all()
    customers = list(map(lambda item: item.serialize(), customers))
    return jsonify(customers)


@api.route('/customers/<int:customer_id>', methods=['GET'])
def get_one_customer(customer_id=None):
    if customer_id is not None:
        customer = Customer()
        customer = customer.query.get(customer_id)
        if customer is not None:
            return jsonify(customer.serialize()), 200
        else:
            return jsonify({"message": "customer not found"}), 404
    else:
        return jsonify({"message": "bad request"}), 400

# /projects endpoints


@api.route('/projects', methods=['GET'])
def get_projects():
    projects = Project()
    projects = projects.query.all()
    projects = list(map(lambda item: item.serialize(), projects))
    return jsonify(projects)


@api.route('/projects/<int:project_id>', methods=['GET'])
def get_one_project(project_id=None):
    if project_id is not None:
        project = Project()
        project = project.query.get(project_id)
        if project is not None:
            return jsonify(project.serialize()), 200
        else:
            return jsonify({"message": "project not found"}), 404
    else:
        return jsonify({"message": "bad request"}), 400
