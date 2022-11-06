

def factorial(n: int) -> int:

    if not isinstance(n, int) or n < 0:
        raise ValueError("Incorrect parameter")

    if n <= 1:
        return 1
    else:
        return n * factorial(n-1)


if __name__ == "__main__":
    # 1, 2, 6, 24, 120
    print(factorial(3))
    print(factorial(4))
    print(factorial(5))
    print(factorial(1))
    print(factorial(0))
    print(factorial(-2))