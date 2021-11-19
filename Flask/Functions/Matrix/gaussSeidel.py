import numpy as np

#Processing
def gaussSeidel(A,b,tol,iter):
    X0 = np.array([0, 0, 0,0],float)
    A=np.array(A,float)
    B=np.array(b,float)
    sizeMatrix=np.shape(A)
    n = sizeMatrix[0]
    #m = sizeMatrix[1]

    system = list()
    for i in range(A.shape[0]):
        row = ["{0:3g}*x{1}".format(A[i, j], j + 1) for j in range(A.shape[1])]
        system.append("[{0}] = [{1:3g}]".format(" + ".join(row), B[i]))

    #Initial values
    X = np.copy(X0)
    diferencia = np.ones(n,dtype=float)
    err = 2*tol
    itera = 0
    #stops if error is less than error or exceds iterations
    while not(err<=tol or itera>iter):
        for i in range(0,n,1):
            suma=0
            for j in range(0,n,1):
                if(j!=i):
                    suma=suma+A[i,j]*X[j]
            nuevo=(B[i]-suma)/A[i,i]
            diferencia[i]=np.abs(nuevo-X[i])
            X[i]=nuevo
        err = np.max(diferencia)
        itera = itera+1
    
    return {"Eq":system,"X":X.tolist()}

'''
A= np.array([[45,13,-4,8],[-5,-28,4,-14],[9,15,63,-7],[2,3,-8,-42]],float)
B= np.array([-25,82,75,43],float)
X0 = np.array([0, 0, 0,0],float)

tol = 1e-8
iter = 100
print(gaussSeidel(A,B,tol,iter))
'''