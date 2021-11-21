def Lagrange(X,Y,xp):
    # Reading interpolation point
    
    # Set interpolated value initially to zero
    yp = 0

    n = len(X)
    # Implementing Lagrange Interpolation
    for i in range(n):

        p = 1

        for j in range(n):
            if i != j:
                p = p * (xp - X[j])/(X[i] - X[j])

        yp = yp + p * Y[i]    

    # Displaying output
    return {"Result":f'Interpolated value at {xp} is {yp}.'}