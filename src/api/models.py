from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from enum import Enum

db = SQLAlchemy()

class Roles(Enum):
    head_of_department = 'Head of Department'
    member = 'Department member'

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    department = db.Column(db.String(30), nullable=False)
    role = db.Column(db.Enum(Roles), nullable=False)
    name = db.Column(db.String(20), unique=False, nullable=False)
    last_name = db.Column(db.String(20), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "email": self.email,
            "department": self.department,
            # do not serialize the password, its a security breach
        }

class Virtualassistant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=False, nullable=False)
    last_name = db.Column(db.String(20), unique=False, nullable=False)
    hourly_rate = db.Column(db.Integer, nullable=False)
    weekly_availability = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Proyect(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(100), unique=False, nullable=False)
    account_manager_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    assistant_id = db.Column(db.Integer, db.ForeignKey('virtualassistant.id'), nullable=False)
