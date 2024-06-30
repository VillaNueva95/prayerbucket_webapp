from flask_login import UserMixin
from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileRequired, FileAllowed
from wtforms import StringField, PasswordField, SubmitField
from wtforms.validators import InputRequired, Length, ValidationError
from config import db, bcrypt  # Ensure these are correctly initialized in your config
import uuid

class Organization(db.Model, UserMixin):
    id = db.Column(db.String(40), primary_key=True, default=lambda: str(uuid.uuid4()))
    email = db.Column(db.String(40), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    name = db.Column(db.String(80), nullable=False)
    org_type = db.Column(db.String(80), nullable=False)
    language = db.Column(db.String(80), nullable=False)
    profile_picture = db.Column(db.String(250), nullable=False, default='default_org.jpg')

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "org_type": self.org_type,
            "language": self.language,
            "profilePicture": self.profile_picture
        }

class RegisterForm(FlaskForm):
    email = StringField('Email', validators=[InputRequired(), Length(min=4, max=40)])
    password = PasswordField('Password', validators=[InputRequired(), Length(min=8, max=20)])
    name = StringField("Name", validators=[InputRequired(), Length(min=4, max=80)])
    org_type = StringField("Organization Type", validators=[InputRequired(), Length(min=4, max=40)])
    language = StringField("Language", validators=[InputRequired(), Length(min=4, max=40)])
    profile_picture = FileField('Profile Picture', validators=[FileRequired(), FileAllowed(['jpg', 'jpeg', 'png'])])
    submit = SubmitField('Register')

    def validate_email(self, email):
        if Organization.query.filter_by(email=email.data).first():
            raise ValidationError("That email already exists. Please choose a different one.")

class User(db.Model, UserMixin):
    id = db.Column(db.String(40), primary_key=True, default=lambda: str(uuid.uuid4()))
    email = db.Column(db.String(40), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    profile_picture = db.Column(db.String(250), nullable=False, default='default_user.jpg')

    def set_password(self, password):
        self.password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def to_json(self):
        return {
            "id": self.id,
            "email": self.email,
            "profilePicture": self.profile_picture
        }

class UserRegisterForm(FlaskForm):
    email = StringField('Email', validators=[InputRequired(), Length(min=4, max=40)])
    password = PasswordField('Password', validators=[InputRequired(), Length(min=8, max=20)])
    profile_picture = FileField('Profile Picture', validators=[FileAllowed(['jpg', 'jpeg', 'png'])])
    submit = SubmitField('Register')

    def validate_email(self, email):
        if User.query.filter_by(email=email.data).first():
            raise ValidationError("That email already exists. Please choose a different one.")
