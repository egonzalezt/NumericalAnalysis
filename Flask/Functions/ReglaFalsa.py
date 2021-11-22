#import de bibliotecas necesarias
import numpy as np
from Expression_Evaluator.evaluator import FunctionEval
from plots import plot as pl

'''
  El metodo de la *Regla Falsa* es un método cerrado para resolver ecuaciones no lineales
  los argumentos son:
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

#Definición de la función para el método de la Regla Falsa
def ReglaFalsa(func,x0,x1,tol=1e-5):
  #validación del rango que encierra la raíz
  if FunctionEval(func,x0)*FunctionEval(func,x1)>0:
    raise Exception('Rango invalido, no cruza el eje x!!')
  x=x0 #valor inicial
  tabla={}
  funcxi=list()
  funcxm=list()
  funcxf=list()
  ycordinate=list()
  iteraciones=0

  #valida el criterio de convergencia
  while np.abs(FunctionEval(func,x))>tol:
    function=(FunctionEval(func,x1)-FunctionEval(func,x0))
    if(function==0):
      raise Exception('Avoid divide by zero')
    x=(x0*FunctionEval(func,x1)-x1*FunctionEval(func,x0))/function #calcula x, método de Regla Falsa
    
    fi=FunctionEval(func,x0)
    fm=FunctionEval(func,x)
    ff=FunctionEval(func,x1)
    funcxi.append(fi)
    funcxm.append(fm)
    funcxf.append(ff)
    ycordinate.append(iteraciones)
    tabla={'x0':x0,'x':x,'x1':x1,'fx0':fi,'fx':fm,'fx1':ff}
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
  tabla["idpic"]=idpic
  return tabla