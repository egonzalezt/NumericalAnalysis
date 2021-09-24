from Functions.BusquedasIncrementales import SearchIncremental
from Functions.Biseccion import Biseccion
from Functions.ReglaFalsa import ReglaFalsa
from Functions.PuntoFijo import fixedPoint
from Functions.Newton import newton

from flask import request, jsonify
from __main__ import app

@app.route('/test', methods=['GET'])
def test():
    return 'it works!'

@app.route('/api/v1/methods/BI', methods=['GET'])
def busquedasInc():
    dic = {"func":"","x0":0,"delta":0,"iter":0}
    state = True
    json_data = request.get_json()
    for values in json_data:
        dic[values]=json_data[values]
    
    if state:
        result = SearchIncremental(dic["func"],dic["x0"],dic["delta"],dic["iter"])
        return jsonify(result)
    else:
        return 'bad request!', 400 

@app.route('/api/v1/methods/Biseccion', methods=['GET'])
def biseccion():
    state = True
    data = request.get_json()

    if state:
        result = Biseccion(data["func"],data["x0"],data["x1"],data["tol"])
        return jsonify(result)
    else:
        return 'bad request!', 400  

@app.route('/api/v1/methods/ReglaFake', methods=['GET'])
def reglaFalsa():
    state = True
    data = request.get_json()

    if state:
        result = ReglaFalsa(data["func"],data["x0"],data["x1"],data["tol"])
        return jsonify(result)
    else:
        return 'bad request!', 400 

@app.route('/api/v1/methods/FixedPoint', methods=['GET'])
def puntoFijo():
    data = request.get_json()

    result = fixedPoint(data["func"],data["x0"],data["tol"],data["iter"])
    return jsonify(result)

@app.route('/api/v1/methods/Newton', methods=['GET'])
def newton():
    data = request.get_json()

    result = newton(data["func"],data["dfunc"],data["x0"],data["tol"],data["iter"])
    return jsonify(result)

@app.errorhandler(404)
def resource_not_found(e):
    return 'What are you doing here', 400 