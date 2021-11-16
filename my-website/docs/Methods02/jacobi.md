---
sidebar_position: 8
---

# Jacobi 

An iterative method used to solve systems of linear equations of the type $Ax=B$. The algorithm takes its name from the german mathematical Carl Gustav Jakob Jacobi. The method of Jacobi consists of using formulas as fixed-point iteration. The succession is constructed by decomposing the coefficient matrix of the system $A$ in the following form:

$A = D + L + U$

where:
 - D: is a diagonal matrix.
 - L: is a matrix lower-triangular.
 - U: is a matrix upper triangular. 
 
On the basis of Ax = b, we can rewrite this equation as:

$Dx + (L + U)x = b$

Then,

$x = D^{-1}[b-(L+U)x]$

If aii ≠ 0 for each i. By the rule iteratively, the definition of the Method of Jacobi can be expressed in the form:

$x^{k+1)} = D^{-1}[b-(L+U)x^{k}]$

$x_i^{k+1} = \frac 1 {a_{ii}} \displaystyle \left (b_i - \sum_{j\neq i} a_{ij} {x_j}^{k} \right), i = 1,2,3...$


It should be noted that the estimate $xi(k+1)$ is in need of all the elements in $x(k)$, except the onethat has the same i. That's why, unlike in the method of Gauss-Seidel, can't overwrite $xi(k)$ with $x(k+1)$, since its value will be needed for the rest of the calculations.