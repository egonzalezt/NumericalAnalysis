from Expression_Evaluator.evaluator import FunctionEval

def newton(func,dfunc,x0,tol,Nmax):
    Xant = x0 
    fant = FunctionEval(func,Xant)
    Err= 1000; 
    cont =0;

    while Err>tol and cont<Nmax:
        Xact=Xant-fant/(FunctionEval(dfunc,Xant))
        fact=FunctionEval(func,Xact)
        E=abs(Xact-Xant)
        cont=cont+1
        Xant=Xact
        fant=fact
    
    return {"x":Xact,"Iteraciones":cont,"Error":Err}