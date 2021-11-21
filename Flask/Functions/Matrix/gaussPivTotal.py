def _pivoteo_total(Ab,k,n):
    max = 0
    maxRow = k
    maxCol = k
    
    #Find max element on matrix to make the rows and cols change
    for r in range(k,n):
        for s in range(k,n):
            if abs(Ab[r][s]) > max:
                max = abs(Ab[r][s])
                maxRow = r
                maxCol = s

    if maxRow != k:
        Ab[maxRow],Ab[k] = Ab[k],Ab[maxRow]
    if maxCol != k:
        for row in Ab:
            row[k],row[maxCol] = row[maxCol],row[k]            
    return Ab

def _gauss(A,i):
    rows = len(A)
    cols = len(A)+1
    pivote = A[i][i]
    #print("Pivote",pivote)
    if pivote != 0.0:
        for r1 in range(i+1,rows): 
            multiplicador =A[r1][i]/pivote
            #print("I",i)
            for c in range(i,cols): 
                #print(A[r1][c],"-",A[i][c],"*",multiplicador,"=",A[r1][c]-(multiplicador*A[i][c]))
                if abs(A[r1][c]-(multiplicador*A[i][c]))<1e-10:
                    A[r1][c]=0
                else:A[r1][c]=A[r1][c]-(multiplicador*A[i][c])
    return A

#matrix = [[-7,2,-3,4,-12],[5,-1,14,-1,13],[1,9,-7,13,31],[-12,13,-8,-7,-32]]

def gaussTotal(matrix):
    for i in range(len(matrix)):
        xd=_pivoteo_total(matrix,i,len(matrix))
        matrix = _gauss(xd,i)
    return matrix
