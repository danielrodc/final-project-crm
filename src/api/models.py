from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
from enum import Enum

db = SQLAlchemy()

class Roles(str, Enum):
    head_of_department = 'Head of Department'
    member = 'Department member'

class Departments(str, Enum):
    hr = 'Human Resources'
    sales = 'Sales'
    finances = 'Finances'
    trial = 'Trial'
    recruitment = 'Recruitment'

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    department = db.Column(db.Enum(Departments), nullable=False)
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
            "role": self.role
            # do not serialize the password, its a security breach
        }

class Virtualassistant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(20), unique=False, nullable=False)
    last_name = db.Column(db.String(20), unique=False, nullable=False)
    hourly_rate = db.Column(db.Numeric(precision=4, scale=2), nullable=False)
    weekly_availability = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Virtual Assistant {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "hourly_rate": self.hourly_rate,
            "weekly_availability": self.weekly_availability
        }

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(100), unique=False, nullable=False)
    account_manager_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    assistant_id = db.Column(db.Integer, db.ForeignKey('virtualassistant.id'), nullable=False)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(30), nullable=False)
    company_address = db.Column(db.String(80), nullable=False)
    country = db.Column(db.String(20), nullable=False)
    representative_name = db.Column(db.String(20), nullable=False)

    def __repr__(self):
        return f'<Customer {self.representative_name}>'

    def serialize(self):
        return {
            "id": self.id,
            "company_name": self.company_name,
            "company_address": self.company_address,
            "country": self.country,
            "representative_name": self.representative_name
        }