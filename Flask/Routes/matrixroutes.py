from flask_cors import CORS, cross_origin
from flask import url_for
from Decoder.routedecoder import decode
from flask import json, request, jsonify, Blueprint

from Functions.Matrix.gaussLU import gaussLU as LU
from Functions.Matrix.gaussNormal import gaussNormal as Normal
from Functions.Matrix.gaussPivPartial import gaussPartialPiv as gaussPipo
from Functions.Matrix.gaussSeidel import gaussSeidel as seidel
from Functions.Matrix.jacobi import jacobi
from Functions.Matrix.quadratic import quadratic
from Functions.Matrix.vandermonde import vandermonde as vm
from scripts.convert import convert

methodsMatrix = Blueprint('methodsmatrix', __name__)

@methodsMatrix.route('/test', methods=['GET'])
def test():
    return jsonify('it works!')

@methodsMatrix.route('/api/v1/methodsMatrix/gaussLU', methods=['POST'])
@cross_origin()
def gaussLU():
    params={"A":(list)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except ValueError as e:
        return jsonify(str(e)), 406
    A,b= convert(values["A"])
    values["A"]=A
    values["b"]=b
    if(quadratic(values["A"])):
        result = LU(**values)
        return jsonify(result)
    else:
        return jsonify({"err":"Matrix must be quadratic N=M"}), 406

@methodsMatrix.route('/api/v1/methodsMatrix/gauss', methods=['POST'])
@cross_origin()
def gauss():
    params={"A":(list)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except ValueError as e:
        return jsonify(str(e)), 406
    A,b= convert(values["A"])
    values["A"]=A
    values["b"]=b
    if(quadratic(values["A"])):
        result = Normal(**values)
        return jsonify(result)
    else:
        return jsonify({"err":"Matrix must be quadratic N=M"}), 406

@methodsMatrix.route('/api/v1/methodsMatrix/gaussPipo', methods=['POST'])
@cross_origin()
def gaussPivparcial():
    params={"A":(list)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except ValueError as e:
        return jsonify(str(e)), 406
    
    A,b= convert(values["A"])
    values["A"]=A
    values["b"]=b
    if(quadratic(values["A"])):
        result = gaussPipo(**values)
        return jsonify(result)
    else:
        return jsonify({"err":"Matrix must be quadratic N=M"}), 406

@methodsMatrix.route('/api/v1/methodsMatrix/gaussSeidel', methods=['POST'])
@cross_origin()
def gaussSeidel():
    params={"A":(list),"tol":(float,int),"iter":(int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except ValueError as e:
        return jsonify(str(e)), 406

    A,b= convert(values["A"])
    values["A"]=A
    values["b"]=b
    if(quadratic(values["A"])):
        result = seidel(**values)
        return jsonify(result)
    else:
        return jsonify({"err":"Matrix must be quadratic N=M"}), 406

@methodsMatrix.route('/api/v1/methodsMatrix/jacobi', methods=['POST'])
@cross_origin()
def Jacobi():
    params={"A":(list),"N":(int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
    except ValueError as e:
        return jsonify(str(e)), 406

    A,b= convert(values["A"])
    values["A"]=A
    values["b"]=b
    if(quadratic(values["A"])):
        result = jacobi(**values)
        return jsonify(result)
    else:
        return jsonify({"err":"Matrix must be quadratic N=M"}), 406

@methodsMatrix.route('/api/v1/methodsMatrix/vandermonde', methods=['POST'])
@cross_origin()
def Vandermonde():
    params={"X":(str),"Y":(str)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        err = []
        X = [float(x) if x.isdigit() is not False else err.append(x) for x in values["X"].split(',')]
        Y = [float(y) if y.isdigit() is not False else err.append(y) for y in values["Y"].split(',')]
        if(len(err)>0):
            raise ValueError("Please send numeric data")
        if(len(X)!=len(Y)):
            raise ValueError("Incomplete points")     
    except ValueError as e:
        return jsonify(str(e)), 406

    result = vm(X,Y)
    return jsonify(result)

@methodsMatrix.route('/api/v1/methodsMatrix/diosayudame', methods=['POST'])
@cross_origin()
def Prueba():
    json_data = request.get_json()
    A,b= convert(json_data["A"])
    return jsonify({"res":A}), 201