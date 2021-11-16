---
sidebar_position: 3
---

# Regula-Falsi

The process in the bisection method is very slow. It depends only on the choice of end points of the interval $[a,b]$. The function $f(x)$ does not have any role in finding the point $c$ (which is just  the mid-point of a and b). It is used only to decide the next smaller interval $[a,c]$ or $[c,b]$. A better approximation to $c$ can be obtained by taking the straight line $L$ joining the points $(a,f(a))$ and $(b,f(b))$ intersecting the x-axis. To obtain the value of $c$ we can equate the two expressions of the slope m of the line $L$