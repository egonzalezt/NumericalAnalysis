from py_expression_eval import Parser

def FunctionEval(function:str,x0):
    parser = Parser()
    try:
        return parser.parse(function).evaluate({'x': x0}) 
    except:
        raise ValueError("Invalid function please check the documentation of writing functions")