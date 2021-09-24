from py_expression_eval import Parser


def FunctionEval(function:str,x0):
    parser = Parser()
    return parser.parse(function).evaluate({'x': x0})    


def fixedPoint(g:str,X0:float,Tol:float,nIter:int):
    #Setup 
    Cont=0
    Xant = X0 
    Error = Tol + 1 
    while Error>Tol and Cont<nIter:
        Xact =  FunctionEval(g,Xant)
        Error=abs(Xact - Xant)
        Xant = Xact
        Cont = Cont + 1
    if Error <= Tol:
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