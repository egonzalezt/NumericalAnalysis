from py_expression_eval import Parser

def FunctionEval(function:str,x0):
    parser = Parser()
    return parser.parse(function).evaluate({'x': x0}) 