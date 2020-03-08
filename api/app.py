from flask import Flask
from flask_restx import Api, Resource, fields
from flask_cors import CORS 

app = Flask(__name__)

CORS(app)
api = Api(app, version='1.0', title='Visualization Sandbox',  description='Flask API Application')

if __name__ == '__main__':
    app.run(debug=True)

