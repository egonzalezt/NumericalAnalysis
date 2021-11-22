---
sidebar_position: 2
---

# Gauss partial pivoting

## Gauss with partial pivoting

[Explore the method](../../methods/matrix/gausspivpart)

## About this method

In each stage k, it is sought that the largest (in absolute value) of the elements of column k that occupy positions greater than or equal to k, occupies the position akk. That is, the largest among the $| aik |$ with $k ≤ i ≤ n$, and the exchange of rows is carried out to locate the highest chosen in row K. By carrying out this process we achieve that the multipliers meet the following property:

$| Mik | ≤ 1$, for all i, such that $k + 1 ≤ i ≤ n$

By carrying out the elimination process and this condition is met, we make the value of the multipliers small and thereby reduce the effect of rounding error.