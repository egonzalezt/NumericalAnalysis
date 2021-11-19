from numpy import zeros

def progresiva(Matrix,b):
    n = len(Matrix)
    rows = Matrix.shape[0]
    X = (zeros(n,float))

    X[0] = b[0]/Matrix[0,0]
    cont = 2
    for i in range(1,rows):
        sum=0
        for j in range(0,cont):
            sum-=Matrix[i,j]*X[j]
        sum+=b[i]
        X[i]=sum
        cont +=1
    return X