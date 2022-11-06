

# iterative approach
# def calculate_sum(n: int) -> int:
#     out = 0
#     for i in range(1, n+1):
#         out += i
#     return out

# recursive approach
def calculate_sum(n: int) -> int:

    if n < 2:
        return n
    else:
        return n + calculate_sum(n-1)


if __name__ == "__main__":
    1, 2, 3, 4, 5, 6
    1, 3, 6, 10, 15, 21
    print(calculate_sum(2))
    print(calculate_sum(3))
    print(calculate_sum(4))
    print(calculate_sum(5))
    print(calculate_sum(6))