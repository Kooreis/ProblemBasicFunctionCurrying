# Question: How do you implement basic function currying? JavaScript Summary

The provided JavaScript code implements a basic function currying mechanism. The `curry` function takes a function `fn` as an argument and returns a new function `curried`. This `curried` function takes any number of arguments and checks if the number of arguments provided is greater than or equal to the number of arguments expected by the original function `fn`. If it is, it applies the arguments to the original function and returns the result. If not, it returns a new function that takes additional arguments and applies them to the `curried` function along with the original arguments. This allows the original function to be called with its arguments provided across multiple function calls, which is the essence of function currying. The `sum` function is used as an example to demonstrate this currying mechanism, and the `curriedSum` function created by currying `sum` can be called with its arguments provided in one, two, or three separate function calls.

---

# TypeScript Differences

The TypeScript version of the solution is very similar to the JavaScript version. The main difference is that TypeScript includes type annotations, which provide a way to enforce type safety at compile time. This can help catch errors before the code is run.

In the TypeScript version, the `curry` function is annotated to accept a `Function` as an argument and the `curried` function is annotated to accept an array of any type (`any[]`). The `sum` function is annotated to accept three numbers as arguments and return a number.

The `apply` method is called with `null` as the context in the TypeScript version, whereas in the JavaScript version it's called with `this`. This difference doesn't affect the functionality of the code, as the context isn't used in the `curry` or `sum` functions.

The TypeScript version also includes additional examples of using the curried function, demonstrating that it can be called with any combination of arguments.

In summary, the TypeScript version provides the same functionality as the JavaScript version, but with the added benefit of type safety.

---

# C++ Differences

The JavaScript version of the solution uses a higher-order function to implement currying. It takes a function as an argument and returns a new function that can take any number of arguments. If the number of arguments is less than the original function's arity (the number of its parameters), it returns another function that takes the remaining arguments. If the number of arguments is equal to or greater than the original function's arity, it applies the original function to the arguments. This is done using the `apply` method, which is a built-in JavaScript function method that allows you to call a function with a given `this` value and arguments provided as an array (or an array-like object).

The C++ version, on the other hand, uses a template function and variadic templates to implement currying. The `curry` function takes a function and any number of arguments, and returns a lambda function that takes any number of additional arguments. The lambda function then calls the original function with the original arguments and the additional arguments. This is done using the `...` operator, which is a C++ feature that allows you to pass a variable number of arguments to a function.

The main difference between the two versions is that the JavaScript version can handle any number of curried function calls (e.g., `curriedSum(1)(2)(3)`, `curriedSum(1, 2)(3)`, `curriedSum(1, 2, 3)`), while the C++ version can only handle one curried function call (e.g., `addFiveAndThree(2)`). This is because JavaScript functions have a `length` property that gives the number of their parameters, which allows the `curry` function to determine whether it has received enough arguments to call the original function. C++ functions do not have a similar feature, so the `curry` function cannot determine whether it has received enough arguments to call the original function.

---
