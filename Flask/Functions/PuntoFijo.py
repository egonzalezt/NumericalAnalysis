from Expression_Evaluator.evaluator import FunctionEval   
from plots import plot as pl

def fixedPoint(g:str,x0:float,tol:float,iter:int):
    #Setup 
    Cont=0
    Xant = x0 
    Error = tol + 1 
    xpoints = list()
    ypoints = list()
    while Error>tol and Cont<iter:
        Xact =  FunctionEval(g,Xant)
        Error=abs(Xact - Xant)
        Xant = Xact
        Cont = Cont + 1
        xpoints.append(Cont)
        ypoints.append(Xact)
    if Error <= tol:
        idpic=pl.plotGen([(xpoints,ypoints)])
        resultados ={
            "X0":Xant,
            "X1":Xact,
            "Iteraciones":Cont,
            "Error":Error,
            "Nota":"X0 es raiz",
            "idpic":idpic,
            "err":""
        }
        return  resultados
    else:
        return {"err":"No converge"}