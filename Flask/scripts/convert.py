import numpy as np

def convert(Matrix):
    Matrix= np.array(Matrix,float)
    A = np.delete(Matrix, -1, axis=1)
    b = Matrix[:, -1]
    return A,b

def convertList(Matrix):
    A,b=convert(Matrix)
    A= np.array(A)
    A=A.tolist()
    b= np.array(b)
    b=b.tolist()
    return A,b
