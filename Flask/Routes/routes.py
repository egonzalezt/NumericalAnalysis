from Functions.BusquedasIncrementales import SearchIncremental
from Functions.Biseccion import Biseccion
from Functions.ReglaFalsa import ReglaFalsa
from Functions.PuntoFijo import fixedPoint
from Functions.Newton import newton
from Functions.Secante import secante
from Functions.RaicesMult import SQRTMult

from Decoder.routedecoder import decode

from flask import json, request, jsonify
from __main__ import app

@app.route('/test', methods=['GET'])
def test():
    return 'it works!'

@app.route('/api/v1/methods/BI', methods=['GET'])
def busquedasInc():

    params = ["func","x0","delta","iter"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return str(e), 400
    result = SearchIncremental(**values)
    return jsonify(result)

@app.route('/api/v1/methods/Biseccion', methods=['GET'])
def biseccion():

    params = ["func","x0","x1","tol"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return str(e), 400
    result = Biseccion(**values)
    return jsonify(result)

@app.route('/api/v1/methods/ReglaFake', methods=['GET'])
def reglaFalsa():
    
    params = ["func","x0","x1","tol"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return str(e), 400
    result = ReglaFalsa(**values)
    return jsonify(result)

@app.route('/api/v1/methods/FixedPoint', methods=['GET'])
def puntoFijo():

    params = ["g","x0","tol","iter"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return str(e), 400
    result = fixedPoint(**values)
    return jsonify(result)

@app.route('/api/v1/methods/Newton', methods=['GET'])
def newton():

    params = ["func","dfunc","x0","tol","iter"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return str(e), 400
    result = newton(**values)
    return jsonify(result)

@app.route('/api/v1/methods/Secant', methods=['GET'])
def secant():

    params = ["func","x0","x1","tol","iter"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return str(e), 400
    result = secante(**values)
    return jsonify(result)

@app.route('/api/v1/methods/SQRTMult', methods=['GET'])
def raicesMultiples():

    params = ["func","dfunc","d2func","x0","tol","iter"]
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except Exception as e: 
        return str(e), 400
    result = SQRTMult(**values)
    return jsonify(result)

@app.errorhandler(404)
def resource_not_found(e):
    return 'What are you doing here', 404 