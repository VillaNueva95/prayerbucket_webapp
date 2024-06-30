from flask import request, jsonify, redirect, url_for, render_template
from config import app, db, bcrypt, csrf
from models import Organization, RegisterForm, UserRegisterForm, User
from werkzeug.utils import secure_filename
from flask_wtf.csrf import generate_csrf
import os
import uuid

@app.route("/hello")
def hello():
    return "Hello World!"

@app.route('/csrf-token', methods=['GET'])
def get_csrf_token():
    try:
        token = generate_csrf()
        response = jsonify({'csrf_token': token})
        response.headers.set('X-CSRFToken', token)
        return response
    except Exception as e:
        app.logger.error(f'Error generating CSRF token: {e}')
        return jsonify({'error': 'Failed to generate CSRF token'}), 500

@app.route('/register/user', methods=['POST'])
def register_user():
    form = UserRegisterForm()  # Assuming you use the same form for simplicity
    if form.validate_on_submit():
        user = User(
            email=form.email.data,
            profile_picture='default.jpg'  # Example default value
        )
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        return jsonify({'message': 'User registration successful'}), 201
    return jsonify(form.errors), 400

@app.route('/register/organization', methods=['POST'])
def register_organization():
    form = RegisterForm()
    if form.validate_on_submit():
        email = form.email.data
        password = form.password.data
        name = form.name.data
        org_type = form.org_type.data
        language = form.language.data
        profile_picture = form.profile_picture.data

        filename = secure_filename(profile_picture.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        profile_picture.save(filepath)

        org_id = str(uuid.uuid4())
        password_hash = bcrypt.generate_password_hash(password).decode('utf-8')

        organization = Organization(
            id=org_id,
            email=email,
            password_hash=password_hash,
            name=name,
            org_type=org_type,
            language=language,
            profile_picture=filepath
        )

        db.session.add(organization)
        db.session.commit()

        return jsonify({'message': 'Organization registration successful'}), 201
    else:
        return jsonify(form.errors), 400

@app.route("/org", methods=["GET"])
def find_organizations():
    try:
        organizations = Organization.query.all()
        organizations_list = [org.to_json() for org in organizations]
        return jsonify(organizations_list), 200
    except Exception as e:
        return jsonify({"error": "Error fetching organizations", "message": str(e)}), 500

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
