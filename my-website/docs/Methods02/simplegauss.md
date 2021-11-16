---
sidebar_position: 4
---

# Simple Gauss (LU)

The methods that are based on the factorization of matrix replace the matrix of coefficients A by two triangular matrix whose product is equal to it. That is, given the matrix A of order nxn, we find a lower triangular matrix L and an upper triangular matrix U, such that: 

$A = L * U^{-1}$

The factorization of a matrix A in the product of two LU matrix by means of which the lower triangular matrix L is obtained by placing the multipliers in the places indicated by the indices of the same and in the main diagonal numbers 1 are placed. The matrix U is Obtained from the matrix resulting from the elimination process by suppressing the column that corresponds to the independent terms. Symbolically, the matrix are formed as follows, where Ab is the matrix resulting from the elimination process in which the last column is deleted: