Here is a simple TypeScript console application that demonstrates basic function currying:

```typescript
function curry(fn: Function) {
    return function curried(...args: any[]) {
        if (args.length >= fn.length) {
            return fn.apply(null, args);
        } else {
            return function(...args2: any[]) {
                return curried.apply(null, args.concat(args2));
            }
        }
    };
}

function sum(a: number, b: number, c: number) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2)(3)); // 6
```

This application defines a `curry` function that takes a function as an argument and returns a new function that can be partially applied. The `sum` function is then curried using this `curry` function, and several examples of using the curried function are logged to the console.