



class TrieNode:
    def __init__(self):
        self.children = {}


class Trie:
    def __init__(self):
        self.root = TrieNode()

    def search(self, word: str) -> TrieNode:
        curr_node = self.root
        for ch in word:
            if (child_node := curr_node.children.get(ch)):
                curr_node = child_node
            else:
                return None
        return curr_node

    def insert(self, word):
        pass

    def collect_words(self, words=None, node=None, word=""):
        pass


words_to_insert = [
    "cat",
    "cab",
    "car",
    "ace",
    "act",
    "add"
]