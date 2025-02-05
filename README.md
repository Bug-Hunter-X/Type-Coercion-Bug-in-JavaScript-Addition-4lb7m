# Type Coercion Bug in JavaScript

This repository demonstrates a common type coercion issue in JavaScript that can lead to unexpected results when adding numbers and strings. The `bug.js` file contains the buggy code, and `bugSolution.js` provides a corrected version.

## Problem

The `foo` function in `bug.js` attempts to add two values but performs string concatenation if one of the inputs is a string, resulting in an unexpected output '12' instead of 3. 

## Solution

The `bugSolution.js` file addresses the issue by explicitly converting both inputs to numbers before addition, ensuring that the addition operation always works as expected. 