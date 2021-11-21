from numpy import array, zeros, fabs

#a = array([[0.02,0.01,0,0], [1,2,1,0], [0,1,2,1],[0,0,100,200]])
#b = array([0.02,1,4,800])


#Gaussian elimination using partial pivoting

def gaussPartialPiv(A,b):
    a=array(A,float)
    b=array(b,float)
    n = len(b)
    x = (zeros(n,float))
    for k in range(n-1):
        for i in range(k+1,n):
            if fabs(a[i,k])>fabs(a[k,k]):
                a[[k,i]]=a[[i,k]]
                b[[k,i]]=b[[i,k]]
                break
        for i in range(k+1,n):
            if a[i,k]==0:continue
            factor = a[k,k]/a[i,k]
            for j in range(k,n):
                a[i,j]=a[k,j]-(a[i,j]*factor)
            b[i] = b[k]-(b[i]*factor)

    #Back-substraction
    
    x[n-1] = b[n-1]/a[n-1,n-1]
    for f in range(n-2,-1,-1):
        sum_ax=0
        for j in range(f+1,n):
            sum_ax+= a[f,j]*x[j]
        x[f]=(b[f]-sum_ax)/a[f,f]

    return {"MSG":"Sucess","A":a.tolist(),"X":x.tolist()}
    