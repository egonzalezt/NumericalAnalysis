<p align="center"><a href="https://github.com/egonzalezt/NumericalAnalysis" target="_blank"><img src="https://www.python.org/static/community_logos/python-powered-w.svg" width="400"></a></p>

# NumericalAnalysis
Repository for the project of Numerical analysis 

# Team Members

- David Felipe Garcia [![GitHub-Mark-Light-32px](https://user-images.githubusercontent.com/53051438/128283510-7d92c6a9-9c3e-4b22-b1ce-7786d951ef65.png)](https://github.com/dfgarciac1) dfgarciac1@eafit.edu.co
- Ximena Guerrero Villa [![GitHub-Mark-Light-32px](https://user-images.githubusercontent.com/53051438/128283510-7d92c6a9-9c3e-4b22-b1ce-7786d951ef65.png)](https://github.com/xguerrerov1) xguerrerov@eafit.edu.co
- Camilo Cañas Jaramillo [![GitHub-Mark-Light-32px](https://user-images.githubusercontent.com/53051438/128283510-7d92c6a9-9c3e-4b22-b1ce-7786d951ef65.png)](https://github.com/ccanasj) ccanasj@eafit.edu.co
- Esteban Gonzalez Tamayo [![GitHub-Mark-Light-32px](https://user-images.githubusercontent.com/53051438/128283510-7d92c6a9-9c3e-4b22-b1ce-7786d951ef65.png)](https://github.com/egonzalezt) egonzalezt@eafit.edu.co

# Project type

For this project, we are going to develop the methods view in class of Numerical analysis. 

# Setup

First you need to install python 3 then you need to run this command:

```bash
pip install -r requirements.txt
```

once you run the command you need to execute this command on your CLI.


```bash
Windows: Python app.py
Linux: Python3 app.py
```

# Methods

  To try this method use an aplication like postman or another app to test apis

## Incremental Searches
  
  Endpoint: http://127.0.0.1:5000/api/v1/methods/BI
  
  example(format json)
  
  {
    "func": "(x-1)**2-2",
    "x0":-1,
    "delta":0.5,
    "iter":32
  }

## Bisection
   
   Endpoint: http://127.0.0.1:5000/api/v1/methods/Biseccion
   
   example(format json)
    {
      "func": "x**3-5",
      "x0":1.5,
      "x1":1.75,
      "tol":1e-5
    }
     
## Fixed Point

## False Rule

  Endpoint: http://127.0.0.1:5000/api/v1/methods/ReglaFake

## Newton

## Secant

## Multiple Roots

