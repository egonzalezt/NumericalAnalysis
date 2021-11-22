---
sidebar_position: 7
---

# Secant

## Secant 

[Explore the method](../../methods/secante)

## Objetive of the Method 

Find a root of a function from two initial values, a tolerance and a number of iterations, for this case it is not necessary to have an interval.

## Generalities

The secant method is defined as a variable of Newton's method. From the iterative equation that defines Newton's method, the derivative is replaced by an expression that approximates it.

$X_2 = X_1 - \frac {f(X_1)*(X_1-X_0)} {f(X_1)-f(X_0)}$


Two initial approximations $X_1$ and $X_0$ must be chosen.

Calculate $X_2$= Expression ---------- $X_n$ = Expression $(n-1)$

And repeat the previous step until an approximation is reached.
