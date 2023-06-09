# arraysEqual question

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

## solution explained

This is a JavaScript function that takes in two arrays, a and b, as its arguments. It compares the values of each element in the two arrays, and returns a boolean value indicating whether the two arrays are similar or not.

The function first creates a new array newa by using the filter method on array a. The filter method creates a new array with all elements that pass the test implemented by the provided function. In this case, the function is checking if the value of an element in a is not equal to the value of the corresponding element in b (i.e., at the same index). This means that the newa array will only contain the elements that are not equal in a and b.

Similarly, the function creates a new array newb by using the filter method on array b. The filter method is again used to keep only the elements that are not equal in b and a.

The function then checks if the length of array newa is equal to zero. If this is true, it means that all elements in arrays a and b are equal, so the function returns true.

Otherwise, if the length of newa is equal to 2 and the concatenated values of newa (i.e., newa.join('')) are equal to the concatenated values of the reversed newb array (i.e., newb.reverse().join('')), then the function also returns true. This condition checks if there are only two elements in newa that are different from newb, and if these two elements are swapped in newb.

If none of the above conditions are true, the function returns false, indicating that the two arrays are not similar.