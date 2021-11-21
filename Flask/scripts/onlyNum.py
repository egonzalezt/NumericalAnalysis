from numpy import array,str_,isnan,sum

def onlyNum(Matrix):
    try:
        A = array(Matrix)
        array_sum = sum(A)
    except:
        raise ValueError("Matrix contains text or empty values")
    if(A.dtype.type is not str_) and (not isnan(array_sum)):
        return True
    else:
        raise ValueError("Matrix contains text or empty values")