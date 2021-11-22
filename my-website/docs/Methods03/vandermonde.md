---
sidebar_position: 3
---

# Vandermonde 

## Vandermonde

[Explore the method](../../methods/interpolation/vandermonde)

## About this method

The most basic procedure to determine the coefficients $a_0,a_1,...,a_n$ of a polynomial

$P_n(X) = a_0 + a_1 + a_2x^2 +···+a_nx^n$

such that it interpolates the $n+1$ points

$(x_0,y_0),(x_1,y_1),···,(x_n,y_n)$

is to write a linear system of equations as follows

$P_n(x_0)=y_0 ⇒ a_0+a_1x_0+a_2x_0^2+···+a_{n-1}x_0^{n-1}+a_nx_0^n=y_0$

$P_n(x_0)=y_0 ⇒ a_0+a_1x_1+a_2x_1^2+···+a_{n-1}x_1^{n-1}+a_nx_1^n=y_1$

$..⇒..$

$P_n(x_0)=y_n ⇒ a_0+a_1x_n+a_2x_n^2+···+a_{n-1}x_n^{n-1}+a_nx_n^n=y_n$

or, in matrix form:

$\left( \begin{array}{ccc}
1 & x_0 & x_0^2 & ··· & x_0^{n-1} & x_0^n\\
1 & x_1 & x_1^2 & ··· & x_1^{n-1} & x_1^n\\
. & . & . & . & . & . \\
1 & x_{n-1} & x_{n-1}^2 & ··· & x_{n-1}^{n-1} & x_{n-1}^n\\
1 & x_n & x_n^2 & ··· & x_n^{n-1} & x_n^n \end{array} \right)$
$\left( \begin{array}{ccc}
a_0 \\
a_1 \\
. \\
a_{n-1} \\
a_n \end{array} \right)$ 
$=$
$\left( \begin{array}{ccc}
y_0 \\
y_1 \\
. \\
y_{n-1} \\
y_n \end{array} \right)$ 

The first matrix $V$ is called a Vandermonde matrix We sill see that $V$ is non-singular, thus we can solve the system $V_{\overrightarrow{a}}=y_{\overrightarrow{a}}$ to obtain the coefficients ${\overrightarrow{a}}=(a_0,a_1,...,a_n)$.