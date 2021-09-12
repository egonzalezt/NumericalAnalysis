#import de bibliotecas necesarias
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

'''
  Entrada
  -------
       f : Ecuación a resolver expresada en la forma f(x)=0
  x0, x1 : Puntos que encierran la raiz f(x0)*f(x1)<0
     tol : Tolerancia (valor por defecto 1e-5)
  Salida
  ------
      x : Raíz de la ecuación
  tabla : Tabla de iteraciones
  '''  '''
  Entrada
  -------
       f : Ecuación a resolver expresada en la forma f(x)=0
  x0, x1 : Puntos que encierran la raiz f(x0)*f(x1)<0
     tol : Tolerancia (valor por defecto 1e-5)
  Salida
  ------
      x : Raíz de la ecuación
  tabla : Tabla de iteraciones
'''
def FunctionEval(function:str,x0):
    Evalfunc = function.replace("x",str(x0))
    return eval(Evalfunc)

def Biseccion(f,x0,x1,tol=1e-5):
  #validación del rango que encierra la raíz
  if FunctionEval(f,x0)*FunctionEval(f,x1)>0:
    raise Exception('Rango invalido, no cruza el eje x!!')
  x=x0 #valor inicial
  #encabezado de la tabla de iteracioens
  tabla=pd.DataFrame(columns=['x0','x','x1','f(x0)','f(x)','f(x1)'])
  #valida el criterio de convergencia
  while np.abs(FunctionEval(f,x))>tol:

    x=(x0+x1)/2 #divide el rango a la mitad, método de Bisección

    #inserta la iteración a la tabla
    tabla=tabla.append({'x0':x0,'x':x,'x1':x1,
                        'f(x0)':FunctionEval(f,x0),'f(x)':FunctionEval(f,x),'f(x1)':FunctionEval(f,x1)},
                       ignore_index=True)
    #valida si la raíz se encuentra en el intervalo [x0,x]
    if FunctionEval(f,x0)*FunctionEval(f,x)<0:
      x1=x
    #valida si la raíz se encuentra en el intervalo [x,x1]
    else:
      x0=x
  #retorna la raíz y la tabla de iteraciones
  resultado = tabla.loc[[len(tabla)-1]]
  return resultado.to_dict()