



def count_down(n: int) -> int:

    if not isinstance(n, int) or n < 0:
        raise ValueError("Incorrect parameter")
    print(n)

    if n == 0:
        print("Reached base case")
        return
    else:
        count_down(n - 1)
        print(n)
        return


if __name__ == "__main__":
    # 1, 2, 6, 24, 120
    count_down(3)
