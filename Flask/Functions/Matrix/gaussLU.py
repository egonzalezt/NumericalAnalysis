from numpy import array, zeros, diag,full
from Functions.Matrix.sustRegresiva import regresiva  
from Functions.Matrix.sustProgresiva import progresiva  

#L = array([[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]],float)
#U = array([[4,3,-2,-7],[3,12,8,-3],[2,3,-9,3],[1,-2,-5,6]],float)
#b = array([20,18,31,12],float)

#Gaussian elimination using LU arrays

def gaussLU(A,b):
    U = array(A,float)
    b = array(b,float)
    n = len(b)
    L = array(diag(full(n,1)), float)
    Z = (zeros(n,float))
    X = (zeros(n,float))
    rows = U.shape[0]
    cols = U.shape[1]

    for r in range(0,rows): 
        pivote = U[r,r]
        for r1 in range(r+1,rows): 
            multiplicador =U[r1,r]/pivote
            L[r1,r]=multiplicador
            for c in range(0,cols): 
                U[r1,c]=U[r1,c]-(multiplicador*U[r,c])
    Z= progresiva(L,b)
    X = regresiva(U,Z)
    results={"L":L.tolist(),"U":U.tolist(),"Z":Z.tolist(),"X":X.tolist()}
    return results


'''
    Z[0] = b[0]/L[0,0]
    cont = 2
    for i in range(1,rows):
        sum=0
        for j in range(0,cont):
            sum-=L[i,j]*Z[j]
        sum+=b[i]
        Z[i]=sum
        cont +=1

    X[n-1] = Z[n-1]/U[n-1,n-1]
    for i in range(n-2,-1,-1):
        sum_ax=0
        for j in range(i+1,n):
            sum_ax+= U[i,j]*X[j]
        X[i]=(Z[i]-sum_ax)/U[i,i]
'''

'''
print(L)
print(U)
print(Z)
print(X)
'''