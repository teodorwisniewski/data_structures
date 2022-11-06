from typing import List


def fibonacci(n: int) -> int:
    if not isinstance(n, int) or n < 0:
        raise ValueError("Incorrect parameter")

    if n <= 1:
        return n
    else:
        new_number = fibonacci(n-1) + fibonacci(n-2)
        return new_number




if __name__ == "__main__":
    # 0, 1, 1, 2, 3, 5, 8, 13
    print(fibonacci(7))
    print(fibonacci(1))
    print(fibonacci(0))
    print(fibonacci(10))
    print(fibonacci(-2))