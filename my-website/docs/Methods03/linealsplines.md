---
sidebar_position: 4
---

# Lineal Splines

## Lineal Splines

[Explore the method](../../methods/interpolation/linealspline)

## About this method

Let $[a,b]$ be an invertal that is divided into subintervals $[x_i,x_{i+1}]$ where $i = 0,..., n - 1, x_0 = a$ and $x_n=b$. A piecewise polynomial is a function $p(x)$ defined on $[a,b]$ by 

$p(x) = p_i(x), x_{i-1} \le x \le x_i, i=1,2,...,n$

where, for $i=1,2,...,n$ each function $p_i(x)$ is a polynomial defined on $[x_{i-1},x_i]$. the degree of $p(x)$ is the maximum degree of each polynomial $p_i(x)$, $for i=1,2,...,n$.

It is essential to note that by this definition a piecewise polynomial defined on $[a,b]$ is equal to some polynomial on each subinterval $[x_{i-1},x_i]$ of $[a,b]$, for $i=1,2,...,n$, but a different polynomial may be used for each subinterval.

Let's explore the linear polynomial, let $f \in C[a,b]$. Given the points $x_0,x_1,...,x_n0$ defined as above, the linear spline $S_l(x)$ that interpolates $f$ at these points is defined by

$s_l(x) = f(x_{i-1}) \frac {x-x_1} {x_{i-1}-x_i} + f(x_i) \frac {x-x_{i-1}} {x_i-x_{i-1}}$, $x \in [x_{i-1},x_i], 1,2,...,n$.

The points $x_0,x_1x,...,x_n are the knots of the spline.