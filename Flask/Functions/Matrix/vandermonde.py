from Functions.Matrix.gaussPivPartial import gaussPartialPiv

def vandermonde(Vector,y):
    return gaussPartialPiv([[k**x for x in range(len(Vector)-1,-1,-1)] for k in Vector],y)