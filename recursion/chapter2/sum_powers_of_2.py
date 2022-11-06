

# iterative approach
# def calculate_sum_powers_of_2(n: int) -> int:
#     out = 0
#     for i in range(1, n+1):
#         out += i**2
#     return out


# recursive approach
def calculate_sum_powers_of_2(n: int) -> int:

    if n < 2:
        return 1
    else:
        return n**2 + calculate_sum_powers_of_2(n-1)


if __name__ == "__main__":
    # 1, 2, 3, 4, 5, 6
    # 2, 5, 14, 30, 55, 91
    print(calculate_sum_powers_of_2(2))
    print(calculate_sum_powers_of_2(3))
    print(calculate_sum_powers_of_2(4))
    print(calculate_sum_powers_of_2(5))
    print(calculate_sum_powers_of_2(6))