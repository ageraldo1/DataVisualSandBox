from flask import Flask
from flask_restful  import Api, Resource, fields
from flask_cors import CORS 

from resources.home import Home
from resources.random_data import RandomData


app = Flask(__name__)

CORS(app)
api = Api(app)

@app.before_first_request
def load_dict():
    import nltk
    nltk.download('words')

api.add_resource(Home, '/')
api.add_resource(RandomData, '/rnd_data/<string:type>', '/rnd_data/<string:type>/<int:size>')

if __name__ == '__main__':
    app.run(port=5000, debug=True)

