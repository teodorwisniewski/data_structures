

def sum_array_numbers(numbers):

    if len(numbers) == 1:
        return numbers[0]
    else:
        head = numbers.pop(0)
        tail = numbers
        return head + sum_array_numbers(tail)


if __name__ == "__main__":
    print(sum_array_numbers([5, 2, 4, 8]))

    print(sum_array_numbers([10, 21, 33]))
