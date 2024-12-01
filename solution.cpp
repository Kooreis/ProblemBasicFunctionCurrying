```cpp
#include <iostream>
#include <functional>

template <typename Function, typename... Args>
auto curry(Function function, Args... args) {
    return [=](auto... lastArgs) {
        return function(args..., lastArgs...);
    };
}

int main() {
    auto add = [](int a, int b, int c) {
        return a + b + c;
    };

    auto addFiveAndThree = curry(add, 5, 3);
    std::cout << addFiveAndThree(2) << std::endl;

    return 0;
}
```