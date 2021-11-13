from numpy import equal


def decode(params:list,values:dict):
    finalvals = {}
    valid=True
    unknowParam = []
    apiValues = []
    result = ", "
    out_str = result.join(params)    
    for value in values:
        if value in params and values[value]!='':
            finalvals[value] = values[value]
            apiValues.append(value)
        else:
            unknowParam.append(value)
            valid = False
    if(params!=apiValues and valid):
        problem = "Missing params!, please send the required params. Endpoint params: {params}".format(params=out_str)
        raise ValueError(problem)
    elif(valid):
        return finalvals
    else:
        invalidParams = result.join(unknowParam) 
        problem = "Bad params!, Unknow params: {value}. Endpoint params: {params}".format(value=invalidParams,params=out_str)
        raise ValueError(problem)

