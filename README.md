# arraysEqual
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

a = [1, 2, 3], b = [1, 2, 3], 
solution(a, b) = true.

The arrays are equal, no need to swap any elements.

a = [1, 2, 3], b = [2, 1, 3],
solution(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

a = [1, 2, 2], b = [2, 1, 1],
solution(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.