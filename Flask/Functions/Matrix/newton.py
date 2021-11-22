from numpy import zeros

def newtonInterpol(x,yp):
    n = len(x)
    y = zeros((n,n))
    #put y values on matrix first row
    for i in range(n):
        y[i][0] = yp[i]

    # Generating backward difference table
    for i in range(1,n):
        for j in range(n-1,i-1,-1):
            y[j][i] = (y[j][i-1] - y[j-1][i-1]) / (x[i] - x[0])

    return({"Result":y.tolist()})
