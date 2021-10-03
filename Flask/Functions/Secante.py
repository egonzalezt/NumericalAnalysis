from Expression_Evaluator.evaluator import FunctionEval   

def secante(func,x0,x1,tol,iter):
    f0 = FunctionEval(func,x0)
    f1 = FunctionEval(func,x1)
    Err= 1000; 
    cont =0;

    while Err>tol and cont<iter:
        Xact= (x1-f1*(x1-x0))/(f1-f0)
        fact=FunctionEval(func,Xact)
        E=abs(Xact-x1)
        cont=cont+1
        x0=x1
        f0=f1 
        x1=Xact
        f1=fact
    
    return {"x":Xact,"Iteraciones":cont,"Error":Err}