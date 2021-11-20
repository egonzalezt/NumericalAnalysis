from Expression_Evaluator.evaluator import FunctionEval
from plots import plot as pl

def newton(func,dfunc,x0,tol,iter):
    Xant = x0 
    fant = FunctionEval(func,Xant)
    Err= 1000; 
    cont =0;
    xpoints = list()
    ypoints = list()
    while Err>tol and cont<iter:
        function =(FunctionEval(dfunc,Xant))
        if(function==0):
            raise Exception('Avoid divide by zero')
        Xact=Xant-fant/function
        fact=FunctionEval(func,Xact)
        Err=abs(Xact-Xant)
        cont=cont+1
        Xant=Xact
        fant=fact
        ypoints.append(Xact)
        xpoints.append(cont)
    idpic=pl.plotGen([(xpoints,ypoints)])
    return {"x":Xact,"Iteraciones":cont,"Error":Err,"idpic":idpic}