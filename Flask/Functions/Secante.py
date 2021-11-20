from Expression_Evaluator.evaluator import FunctionEval   

def secante(func,x0,x1,tol,iter):
    f0 = FunctionEval(func,x0)
    f1 = FunctionEval(func,x1)
    Err= 1000; 
    cont =1;

    while Err>tol and cont<iter:
        function=(f1-f0)
        if(function==0):
            raise Exception('Avoid divide by zero')
        Xact= x1-(f1*(x1-x0))/function
        fact=FunctionEval(func,Xact)
        Err=abs(Xact-x1)
        cont=cont+1
        x0=x1
        f0=f1 
        x1=Xact
        f1=fact
    
    return {"x":Xact,"Iteraciones":cont,"Error":Err}