---
sidebar_position: 9
---

# Gauss Seidel

## Gauss Seidel

[Explore the method](../../methods/iteratives/gaussseidel)

## About this method

The Gauss–Seidel method is an iterative technique for solving a square system of n linear equations with unknown $x$:

$Ax=b$

it is defined by the iteration

$L*x^{k+1}=b-Ux^{(k)}$,

where $x^{(k)}$ is the kth approximation or iteration of $x,x^{(k+1)}$ is the next or k+1 iteration of $x$, and the matrix $A$ is decomposed into a lower triangular component $L$, and a strictly upper triangular $L_*$ component $U$

in more detail, write out $A$, $x$ and $b$ in their components:

$A=$ 
$\left( \begin{array}{ccc}
a_{11} & a_{12} & ··· & a_{1n}\\
a_{21} & a_{22} & ··· & a_{2n}\\
. & . & . & .\\
a_{n1} & a_{n2} & ··· & a_{nn}\end{array} \right)$
$,x=$
$\left( \begin{array}{ccc}
x_{1}\\
x_{2}\\
.\\
x_{n}\end{array} \right)$
$,b=$
$\left( \begin{array}{ccc}
b_{1}\\
b_{2}\\
.\\
b_{n}\end{array} \right)$

Then the decomposition of A into its lower triangular component and its strictly upper triangular component is given by:

$A=L_*+U$ where 

$L_*=$
$\left( \begin{array}{ccc}
a_{11} & {0} & ··· & {0}\\
a_{21} & a_{22} & ··· & {0}\\
. & . & . & .\\
a_{n1} & a_{n2} & ··· & a_{nn}\end{array} \right)$
$,U=$
$\left( \begin{array}{ccc}
{0} & a_{12} & ··· & a_{1n}\\
{0} & {0} & ··· & a_{2n}\\
. & . & . & .\\
{0} & {0} & ··· & {0}\end{array} \right)$

The system of linear equations may be rewritten as:

$L_*x=b-Ux$

The Gauss–Seidel method now solves the left hand side of this expression for $x$, using previous value for $x$ on the right hand side.