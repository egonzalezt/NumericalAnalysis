from py_expression_eval import Parser

def FunctionEval(function:str,x0):
    parser = Parser()
    return parser.parse(function).evaluate({'x': x0})    


def newton(f,df,x0,tol,Nmax):
    Xant = x0 
    fant = FunctionEval(f,Xant)
    Err= 1000; 
    cont =0;

    while Err>tol and cont<Nmax:
        Xact=Xant-fant/(FunctionEval(df,Xant));
        fact=FunctionEval(f,Xact);
        E=abs(Xact-Xant);
        cont=cont+1;
        Xant=Xact;
        fant=fact;
    
    resultados={"x":Xact,"Iteraciones":cont,"Error":Err}