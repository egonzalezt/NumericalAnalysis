from sympy import Symbol

def linealSpline(xi,fi):
    x = Symbol('x')
    n = len(xi)
    functions = []
    tramo = 1
    while not tramo >= n:
        numerador = fi[tramo] - fi[tramo - 1]
        denominador = xi[tramo] - xi[tramo - 1]
        m = numerador/denominador
        pxtramo = fi[tramo - 1] + m * (x - xi[tramo - 1])
        functions.append(f"F[{xi[tramo-1]}-{xi[tramo]}]={pxtramo}")
        tramo = tramo + 1
    return functions