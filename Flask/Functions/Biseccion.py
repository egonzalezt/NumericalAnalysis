#import de bibliotecas necesarias
import numpy as np
import pandas as pd
from plots import plot as pl
from Expression_Evaluator.evaluator import FunctionEval

'''
  Entrada
  ------
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

def Biseccion(func,x0,x1,tol=1e-5):
  iteraciones=0
  funcxi=list()
  funcxm=list()
  funcxf=list()
  ycordinate=list()
  #validación del rango que encierra la raíz
  if FunctionEval(func,x0)*FunctionEval(func,x1)>0:
    raise Exception('Rango invalido, no cruza el eje x!!')
  x=x0 #valor inicial
  #encabezado de la tabla de iteracioens
  tabla=pd.DataFrame(columns=['x0','x','x1','f(x0)','f(x)','f(x1)'])
  #valida el criterio de convergencia
  while np.abs(FunctionEval(func,x))>tol:
    x=(x0+x1)/2 #divide el rango a la mitad, método de Bisección

    #inserta la iteración a la tabla
    fi=FunctionEval(func,x0)
    fm=FunctionEval(func,x)
    ff=FunctionEval(func,x1)
    funcxi.append(fi)
    funcxm.append(fm)
    funcxf.append(ff)
    ycordinate.append(iteraciones)
    tabla=tabla.append({'x0':x0,'x':x,'x1':x1,
                        'f(x0)':fi,'f(x)':fm,'f(x1)':ff},
                       ignore_index=True)
    #valida si la raíz se encuentra en el intervalo [x0,x]
    if FunctionEval(func,x0)*FunctionEval(func,x)<0:
      x1=x
    #valida si la raíz se encuentra en el intervalo [x,x1]
    else:
      x0=x
    iteraciones=iteraciones+1
  plot=[(ycordinate,funcxi),(ycordinate,funcxm),(ycordinate,funcxf)]
  idpic = pl.plotGen(plot)
  #retorna la raíz y la tabla de iteraciones
  resultado = tabla.loc[[len(tabla)-1]]
  resultado = resultado.to_dict()
  resultado["idpic"]=idpic
  return resultado