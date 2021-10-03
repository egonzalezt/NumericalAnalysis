import matplotlib.pyplot as plt
import numpy as np
from py_expression_eval import Parser

def FunctionEval(function:str,x0):
    parser = Parser()
    return parser.parse(function).evaluate({'x': x0})  

def generate():
    x=np.linspace(-10,10)
    valores = list()
    for i in x:
        resultado = FunctionEval("(x-1)**2-2",i)
        valores.append(resultado)
    y=np.array(valores)
    plt.plot(x,y)
    plt.grid()
    plt.show()
