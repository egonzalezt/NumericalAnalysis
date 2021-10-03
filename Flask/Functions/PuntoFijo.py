from Expression_Evaluator.evaluator import FunctionEval   

def fixedPoint(g:str,x0:float,tol:float,iter:int):
    #Setup 
    Cont=0
    Xant = x0 
    Error = tol + 1 
    while Error>tol and Cont<iter:
        Xact =  FunctionEval(g,Xant)
        Error=abs(Xact - Xant)
        Xant = Xact
        Cont = Cont + 1
    if Error <= tol:
        resultados ={
            "X0":Xant,
            "X1":Xact,
            "Iteraciones":Cont,
            "Error":Error,
            "Nota":"X0 es raiz"
        }
        return  resultados
    else:
        return "No converge"