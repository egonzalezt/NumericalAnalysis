from numpy import zeros

def regresiva(Matrix,b):
    n = len(Matrix)
    X = (zeros(n,float))

    X[n-1] = b[n-1]/Matrix[n-1,n-1]
    for i in range(n-2,-1,-1):
        sum_ax=0
        for j in range(i+1,n):
            sum_ax+= Matrix[i,j]*X[j]
        X[i]=(b[i]-sum_ax)/Matrix[i,i]
    return X