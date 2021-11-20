def Lagrange(x,y,xp):
    # Reading interpolation point
    
    # Set interpolated value initially to zero
    yp = 0

    n = len(x)
    # Implementing Lagrange Interpolation
    for i in range(n):

        p = 1

        for j in range(n):
            if i != j:
                p = p * (xp - x[j])/(x[i] - x[j])

        yp = yp + p * y[i]    

    # Displaying output
    return {"Result":f'Interpolated value at {xp} is {yp}.'}