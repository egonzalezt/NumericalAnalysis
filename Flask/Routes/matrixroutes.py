from flask_cors import CORS, cross_origin
from flask import url_for
from Decoder.routedecoder import decode
from flask import json, request, jsonify, Blueprint

#Functions
from Functions.Matrix.gaussLU import gaussLU as LU
from Functions.Matrix.gaussNormal import gaussNormal as Normal
from Functions.Matrix.gaussPivPartial import gaussPartialPiv as gaussPipo
from Functions.Matrix.gaussSeidel import gaussSeidel as seidel
from Functions.Matrix.jacobi import jacobi
from Functions.Matrix.quadratic import quadratic
from Functions.Matrix.vandermonde import vandermonde as vm
from Functions.Matrix.lagrange import Lagrange as lg
from Functions.Matrix.gaussPivTotal import gaussTotal
from Functions.Matrix.sustRegresiva import regresivaList
from Functions.Matrix.newton import newtonInterpol
from Functions.Matrix.linealSpline import linealSpline

#Scripts
from scripts.convert import convertList,convert
from scripts.onlyNum import onlyNum
from scripts.isFloat import check_float

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
        onlyNum(values["A"])
    except ValueError as e:
        return jsonify({"err":str(e)}), 406
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
        onlyNum(values["A"])
    except ValueError as e:
        return jsonify({"err":str(e)}), 406
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
        print(type(values["A"]))
        onlyNum(values["A"])
    except ValueError as e:
        return jsonify({"err":str(e)}), 406
    
    A,b= convert(values["A"])
    values["A"]=A
    values["b"]=b
    if(quadratic(values["A"])):
        result = gaussPipo(**values)
        return jsonify(result)
    else:
        return jsonify({"err":"Matrix must be quadratic N=M"}), 406

@methodsMatrix.route('/api/v1/methodsMatrix/gaussTotal', methods=['POST'])
@cross_origin()
def gaussPivtotal():
    params={"A":(list)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        onlyNum(values["A"])
    except ValueError as e:
        return jsonify({"err":str(e)}), 406
    
    A,b= convert(values["A"])
    if(quadratic(A)):
        result = gaussTotal(values["A"])
        A1,b1= convert(result)
        A2,b2= convertList(result)
        result = regresivaList(A1,b1)
        return jsonify({"A":A2,"Result":result})
    else:
        return jsonify({"err":"Matrix must be quadratic N=M"}), 406

@methodsMatrix.route('/api/v1/methodsMatrix/gaussSeidel', methods=['POST'])
@cross_origin()
def gaussSeidel():
    params={"A":(list),"tol":(float,int),"iter":(int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        onlyNum(values["A"])
    except ValueError as e:
        return jsonify({"err":str(e)}), 406

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
        onlyNum(values["A"])
    except ValueError as e:
        return jsonify({"err":str(e)}), 406

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
        X = [float(x) if check_float(x) is not False else err.append(x) for x in values["X"].split(',')]
        Y = [float(y) if check_float(y) is not False else err.append(y) for y in values["Y"].split(',')]
        if(len(err)>0):
            raise ValueError("Please send numeric data")
        if(len(X)!=len(Y)):
            raise ValueError("Incomplete points")     
    except ValueError as e:
        return jsonify({"err":str(e)}), 406

    result = vm(X,Y)
    return jsonify(result)

@methodsMatrix.route('/api/v1/methodsMatrix/Lagrange', methods=['POST'])
@cross_origin()
def Lagrange():
    params={"X":(str),"Y":(str),"xp":(float,int)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        err = []
        X = [float(x) if check_float(x) is not False else err.append(x) for x in values["X"].split(',')]
        Y = [float(y) if check_float(y) is not False else err.append(y) for y in values["Y"].split(',')]
        if(len(err)>0):
            raise ValueError("Please send numeric data")
        if(len(X)!=len(Y)):
            raise ValueError("Incomplete points")     
    except ValueError as e:
        return jsonify({"err":str(e)}), 406

    result = lg(X,Y,values["xp"])
    return jsonify(result)

@methodsMatrix.route('/api/v1/methodsMatrix/Newton', methods=['POST'])
@cross_origin()
def Newton():
    params={"X":(str),"Y":(str)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        err = []
        X = [float(x) if check_float(x) is not False else err.append(x) for x in values["X"].split(',')]
        Y = [float(y) if check_float(y) is not False else err.append(y) for y in values["Y"].split(',')]
        if(len(err)>0):
            raise ValueError("Please send numeric data")
        if(len(X)!=len(Y)):
            raise ValueError("Incomplete points")     
    except ValueError as e:
        return jsonify({"err":str(e)}), 406

    result = newtonInterpol(X,Y)
    return jsonify(result)

@methodsMatrix.route('/api/v1/methodsMatrix/Lspline', methods=['POST'])
@cross_origin()
def LinealSpline():
    params={"X":(str),"Y":(str)}
    json_data = request.get_json()
    try:
        values = decode(params,json_data)
        err = []
        X = [float(x) if check_float(x) is not False else err.append(x) for x in values["X"].split(',')]
        Y = [float(y) if check_float(y) is not False else err.append(y) for y in values["Y"].split(',')]
        if(len(err)>0):
            raise ValueError("Please send numeric data")
        if(len(X)!=len(Y)):
            raise ValueError("Incomplete points")     
    except ValueError as e:
        return jsonify({"err":str(e)}), 406

    result = linealSpline(X,Y)
    return jsonify(result)






@methodsMatrix.route('/api/v1/methodsMatrix/diosayudame', methods=['POST'])
@cross_origin()
def Prueba():
    json_data = request.get_json()
    A,b= convert(json_data["A"])
    return jsonify({"res":A}), 201

@methodsMatrix.errorhandler(404)
@cross_origin()
def resource_not_found(e):
    return jsonify('What are you doing here'), 404 


@methodsMatrix.errorhandler(500)
@cross_origin()
def internal_error(error):
    return jsonify('What are you doing here'), 500