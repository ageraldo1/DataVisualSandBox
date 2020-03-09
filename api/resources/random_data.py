from flask_restful import Resource
from random_word import RandomWords
import random

class RandomData(Resource):
    def get(self, type=None, size=6):

        r = RandomWords()
        status = {}

        if type:
            result = {}

            if type == 'bar':

                result = {
                    'label' : r.get_random_words(limit=size, hasDictionaryDef=True),
                    'data'  : [random.randint(0, 100) for i in range(size)]
                }

            elif(type == 'line'):
                data = []

                for _ in range(size):
                    data.append([random.randint(0, 100) for i in range(size)])

                result = {
                    'label' : r.get_random_words(limit=size, hasDictionaryDef=True),
                    'data'  : data
                }
            
            status['message'] = 'no errors found'
            status['code'] = 0            

        else:
            status['message'] = 'invalid operation'
            status['code'] = 10

        return {'result'  : result,
                'message' : status['message'],
                'status'  : status['code']
               }, 200



