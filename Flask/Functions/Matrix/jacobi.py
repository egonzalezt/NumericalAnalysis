from numpy import array, zeros, diag, diagflat, dot

def jacobi(A,b,N=25):
    """Solves the equation Ax=b via the Jacobi iterative method."""
    
    A=array(A,float)
    b=array(b,float)

    # Create an initial guess if needed                                                                                                                                                            
    x = zeros(len(A[0]))

    # Create a vector of the diagonal elements of A                                                                                                                                                
    # and subtract them from A                                                                                                                                                                     
    D = diag(A)
    R = A - diagflat(D)

    # Iterate for N times                                                                                                                                                                          
    for i in range(N):
        x = (b - dot(R,x)) / D #dot returns the dot product of vectors a and b
    return {"x":x.tolist()}
'''
A = array([[2.0,1.0],[5.0,7.0]])
b = array([11.0,13.0])
guess = array([0,0])

sol = jacobi(A,b,N=25,x=guess)

print ("A:")
print(A)

print ("b:")
print(b)

print ("x:")
print(sol)
'''