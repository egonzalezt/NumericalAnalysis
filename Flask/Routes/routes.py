from flask_cors import CORS, cross_origin

from Functions.BusquedasIncrementales import SearchIncremental
from Functions.Biseccion import Biseccion
from Functions.ReglaFalsa import ReglaFalsa
from Functions.PuntoFijo import fixedPoint
from Functions.Newton import newton
from Functions.Secante import secante
from Functions.RaicesMult import SQRTMult

from Decoder.routedecoder import decode

from flask import json, request, jsonify, Blueprint

methods = Blueprint('methods', __name__)

@methods.route('/test', methods=['GET'])
def test():
    return jsonify('it works!')

@methods.route('/api/v1/methods/BI', methods=['POST'])
@cross_origin()
def busquedasInc():

    params = ["func","x0","delta","iter"]
    json_data = request.get_json()
    print(json_data)
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return jsonify('dont send empty data'), 406
    result = SearchIncremental(**values)
    return jsonify(result)

@methods.route('/api/v1/methods/Biseccion', methods=['POST'])
@cross_origin()
def biseccion():

    params = ["func","x0","x1","tol"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return jsonify('dont send empty data'), 406
    result = Biseccion(**values)
    return jsonify(result)

@methods.route('/api/v1/methods/ReglaFake', methods=['POST'])
@cross_origin()
def reglaFalsa():
    
    params = ["func","x0","x1","tol"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return jsonify('dont send empty data'), 406
    result = ReglaFalsa(**values)
    return jsonify(result)

@methods.route('/api/v1/methods/FixedPoint', methods=['POST'])
@cross_origin()
def puntoFijo():

    params = ["g","x0","tol","iter"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return jsonify('dont send empty data'), 406
    result = fixedPoint(**values)
    return jsonify(result)

@methods.route('/api/v1/methods/Newton', methods=['POST'])
@cross_origin()
def newton():

    params = ["func","dfunc","x0","tol","iter"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return jsonify('dont send empty data'), 406
    result = newton(**values)
    return jsonify(result)

@methods.route('/api/v1/methods/Secant', methods=['POST'])
@cross_origin()
def secant():

    params = ["func","x0","x1","tol","iter"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return jsonify('dont send empty data'), 406
    result = secante(**values)
    return jsonify(result)

@methods.route('/api/v1/methods/SQRTMult', methods=['POST'])
@cross_origin()
def raicesMultiples():

    params = ["func","dfunc","d2func","x0","tol","iter"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return jsonify('dont send empty data'), 406
    result = SQRTMult(**values)
    return jsonify(result)

@methods.errorhandler(404)
@cross_origin()
def resource_not_found(e):
    return jsonify('What are you doing here'), 404 