from flask_cors import CORS, cross_origin
from flask import url_for
import sympy

from Functions.BusquedasIncrementales import SearchIncremental
from Functions.Biseccion import Biseccion
from Functions.ReglaFalsa import ReglaFalsa
from Functions.PuntoFijo import fixedPoint
from Functions.Newton import newton as new
from Functions.Secante import secante
from Functions.RaicesMult import SQRTMult
from Expression_Evaluator.evaluator import FunctionEval as FE

from Decoder.routedecoder import decode

from flask import json, request, jsonify, Blueprint

methods = Blueprint('methods', __name__)

variable = sympy.Symbol('x')


@methods.route('/test', methods=['GET'])
def test():
    return jsonify('it works!')

@methods.route('/api/v1/methods/BI', methods=['POST'])
@cross_origin()
def busquedasInc():

    params={"func":str,"x0":(float,int),"delta":(float,int),"iter":(float,int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        FE(values["func"],0)
    except ValueError as e:
        return jsonify(str(e)), 406
        
    result = SearchIncremental(**values)
    return jsonify(result)

@methods.route('/api/v1/methods/Biseccion', methods=['POST'])
@cross_origin()
def biseccion():

    params={"func":str,"x0":(float,int),"x1":(float,int),"tol":(float,int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        FE(values["func"],0)
        result = Biseccion(**values)
    except ValueError as e:
        return jsonify(str(e)), 406
    return jsonify(result)

@methods.route('/api/v1/methods/ReglaFake', methods=['POST'])
@cross_origin()
def reglaFalsa():
    
    params={"func":str,"x0":(float,int),"x1":(float,int),"tol":(float,int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        FE(values["func"],0)
        result = ReglaFalsa(**values)
    except ValueError as e:
        return jsonify(str(e)), 406
    return jsonify(result)

@methods.route('/api/v1/methods/FixedPoint', methods=['POST'])
@cross_origin()
def puntoFijo():

    params={"g":str,"x0":(float,int),"tol":(float,int),"iter":(float,int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        FE(values["g"],0)
    except ValueError as e:
        return jsonify(str(e)), 406
    result = fixedPoint(**values)
    return jsonify(result)

@methods.route('/api/v1/methods/Newton', methods=['POST'])
@cross_origin()
def newton():

    params={"func":str,"x0":(float,int),"tol":(float,int),"iter":(float,int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        FE(values["func"],0)
        derivada = str(sympy.diff(json_data["func"],variable))
        if '**' in derivada:
            derivada = derivada.replace('**','^')
        values["dfunc"]=derivada
        result = new(**values)
    except ValueError as e:
        return jsonify(str(e)), 406
    return jsonify(result)

@methods.route('/api/v1/methods/Secant', methods=['POST'])
@cross_origin()
def secant():
    params={"func":str,"x0":(float,int),"x1":(float,int),"tol":(float,int),"iter":(float,int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        FE(values["func"],0)
        result = secante(**values)
    except ValueError as e:
        return jsonify(str(e)), 406
    return jsonify(result)

@methods.route('/api/v1/methods/SQRTMult', methods=['POST'])
@cross_origin()
def raicesMultiples():

    params={"func":str,"x0":(float,int),"tol":(float,int),"iter":(float,int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        FE(values["func"],0)

        derivada = str(sympy.diff(json_data["func"],variable))
        if '**' in derivada:
            derivada = derivada.replace('**','^')
        derivada2 = str(sympy.diff(derivada,variable))
        if '**' in derivada2:
            derivada2 = derivada2.replace('**','^')
        values["dfunc"]=derivada
        values["d2func"]=derivada2
        result = SQRTMult(**values)

    except ValueError as e:
        return jsonify(str(e)), 406
    return jsonify(result)

@methods.route('/api/v1/image', methods=['GET'])
@cross_origin()
def image():
    return '<img src=' + url_for('static',filename='test.png') + '>' 

@methods.errorhandler(404)
@cross_origin()
def resource_not_found(e):
    return jsonify('What are you doing here'), 404 


@methods.errorhandler(500)
@cross_origin()
def internal_error(error):
    return jsonify('What are you doing here'), 404 
