from numpy import array, zeros
#A = array([[2,-1,-3,2],[5,-10,2,-6],[5,-9,15,-6],[2,1,-1,10]],float)
#b = array([24,3,2,1],float)


#Elimination
def gaussNormal(A,b):
    A=array(A,float)
    b=array(b,float)
    n = len(b)
    X = (zeros(n,float))    
    rows = A.shape[0]
    cols = A.shape[1]
    stop = False

    for r in range(0,rows): 
        pivote = A[r,r]
        if pivote != 0.0:
            for r1 in range(r+1,rows): 
                multiplicador =A[r1,r]/pivote
                for c in range(0,cols): 
                    A[r1,c]=A[r1,c]-(multiplicador*A[r,c])
        else:
            stop= True
    if not stop:
        X[n-1] = b[n-1]/A[n-1,n-1]
        for i in range(n-2,-1,-1):
            sum_ax=0
            for j in range(i+1,n):
                sum_ax+= A[i,j]*X[j]
            X[i]=(b[i]-sum_ax)/A[i,i]
        return {"A":A.tolist(),"X":X.tolist()}
    else:
        return("System with no solution try other method")
'''
print(A)
print(X)
'''