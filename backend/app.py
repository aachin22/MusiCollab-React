from flask import Flask, Response
from flask import request
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import text

# For testing
from flask import render_template
app = Flask(__name__)

db_name = 'projects.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + db_name
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
CORS(app)
db = SQLAlchemy(app)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)

    def __init__(self, name, email, password):
        self.name = name
        self.email = email
        self.password = password

with app.app_context():
    db.create_all()

# r1 = User('Hilary', 'hilary', 'pass')
# db.session.add(r1)
# db.session.commit()

@app.route('/')
def hello_world():
    # try:
    #     db.session.query(text('1')).from_statement(text('SELECT 1')).all()
    #     return '<h1>It works.</h1>'
    # except Exception as e:
    #     # e holds description of the error
    #     error_text = "<p>The error:<br>" + str(e) + "</p>"
    #     hed = '<h1>Something is broken.</h1>'
    #     return hed + error_text
    return render_template('home.html')

@app.route('/login',methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        user_email = request.form['name']
        user_password = request.form['password']
    else:
        user_email = request.args.get('name')
        user_password = request.args.get('password')
    db_user = User.query.filter_by(email = user_email).first()
    if db_user is None:
        return {'message': 'Account has not been created'}, 400
    if db_user.password == user_password:
        return {'message': 'Login successful'}, 200
    else:
        return {'message': 'Wrong password'}, 400

@app.route('/create_user', methods = ['POST', 'GET'])
def create_user():
    if request.method == 'POST':
        user_name = request.form['name']
        user_email = request.form['email']
        user_password = request.form['password']
    else:
        user_name = request.args.get('name')
        user_email = request.args.get('email')
        user_password = request.args.get('password')
    db_user = User.query.filter_by(email = user_email).first()
    if db_user is None:
        r = User(user_name, user_email, user_password)
        db.session.add(r)
        db.session.commit()
        response = Response({'message': 'Account creation successful'}, status=200)
        response.headers["Access-Control-Allow-Origin"] = "*"
        return response
    else:
        return Response({'message': 'Account for this email already exists'}, status=400, headers={"Access-Control-Allow-Origin": "*"})


# main driver function
if __name__ == '__main__':
    app.run(debug=True)
