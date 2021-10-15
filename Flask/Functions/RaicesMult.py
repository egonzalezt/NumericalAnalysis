from Expression_Evaluator.evaluator import FunctionEval   

def SQRTMult(func,dfunc,d2func,x0,tol,iter):
    Xant = x0
    fant = FunctionEval(func,Xant)
    Err= 1000; 
    cont =0;

    while Err>tol and cont<iter:
        Xact=(Xant-fant*FunctionEval(dfunc,Xant))/((FunctionEval(dfunc,Xant))^2-fact*FunctionEval(d2func,Xant))
        fact=FunctionEval(func,Xact)
        E=abs(Xact-Xant)
        cont=cont+1
        Xant=Xact
        fant=fact
    
    return {"x":Xact,"Iteraciones":cont,"Error":Err}