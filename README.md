# Unexpected Null Return in Addition Function

This repository demonstrates a common, yet subtle bug in JavaScript related to null value handling in a simple addition function.

## Bug Description

The `foo` function is designed to add two numbers. However, it returns `null` if either input is `null`, even if the other input is a valid number. This behavior might be unexpected and can lead to errors in applications relying on this function.

## Reproduction

1. Clone this repository.
2. Open `bug.js` to view the buggy code.
3. Run the code and observe the unexpected `null` return when one of the inputs is `null`.

## Solution

The solution involves modifying the function to handle `null` values appropriately, typically by either treating them as 0 or throwing an error to indicate invalid input.

The solution is provided in `bugSolution.js`.