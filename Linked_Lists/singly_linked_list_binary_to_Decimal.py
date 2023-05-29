# class Solution:
#     def getDecimalValue(self, head: ListNode) -> int:
#         single_node = head
#         numbers = [single_node.val]
#         while single_node.next is not None:
#             single_node = single_node.next
#             numbers.append(single_node.val)
#         output = 0
#         for i, val in enumerate(numbers[::-1]):
#             output += val * 2**i
#         return output


# class Solution:
#     def getDecimalValue(self, head: ListNode) -> int:
#         output = 0
#         while head is not None:
#             output = output * 2 + head.val
#             head = head.next

#         return output


class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        output = ''
        while head is not None:
            output += str(head.val)
            head = head.next

        return int(output, 2)