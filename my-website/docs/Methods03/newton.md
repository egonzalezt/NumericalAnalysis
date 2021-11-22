---
sidebar_position: 2
---

## Newton

## Newton (Split Differences) 

[Explore the method](../../methods/interpolation/newton)

## About this method

To more simply determine Newton's interpolating polynomial, the concept of divided differences is used, which allow several versions of the desired polynomial to be calculated; the given points are used incrementally to obtain an interpolating polynomial at each step. In this way you can compare polynomials of different degrees and with them decide which is the polynomial that will be chosen as a solution to the problem posed.  

This method is very algorithmic and is extremely convenient in certain cases, especially when you want to calculate a high-grade interpolating polynomial.  

Divided differences are calculated based on those of the immediately preceding order, and the denominator of each difference is the subtraction of the extreme values of the variable x that are involved. The subtraction is oriented in the same direction as the numerator.
