import numpy as np

def convert(Matrix):
    Matrix= np.array(Matrix,float)
    A = np.delete(Matrix, -1, axis=1)
    b = Matrix[:, -1]
    return A,b