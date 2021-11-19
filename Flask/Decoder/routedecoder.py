from numpy import equal


def decode(params:dict,values:dict):
    finalvals = {}
    valid=True
    unknowParam = []
    apiValues = []
    invalidType = []
    result = ", "
    stop=False
    out_str = result.join(params)   
    for k, v in params.items():
        if not isinstance(values[k], v):
            invalidType.append(k)
            stop=True

    if not stop:
        for value in values:     
            if value in params.keys() and values[value]!='':
                finalvals[value] = values[value]
                apiValues.append(value)
            else:
                unknowParam.append(value)
                valid = False
        if((not all(value in params for value in apiValues)) and valid):
            problem = "Missing params!, please send the required params. Endpoint params: {params}".format(params=out_str)
            raise ValueError(problem)
        elif(valid):
            return finalvals
        else:
            invalidParams = result.join(unknowParam) 
            problem = "Bad params!, Unknow params: {value}. Endpoint params: {params}".format(value=invalidParams,params=out_str)
            raise ValueError(problem)
    else:
        invalidParams = result.join(invalidType) 
        problem = f"Invalid data type please check those values {invalidParams}"
        raise ValueError(problem)