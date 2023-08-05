
from typing import List


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
        curr_node = self.root
        for ch in word:
            if (child_node := curr_node.children.get(ch)):
                curr_node = child_node
            else:
                new_node = TrieNode()
                curr_node.children[ch] = new_node
                curr_node = new_node
        curr_node.children["*"] = None
        return curr_node

    def collect_words(self, words=None, node=None, word="") -> List[str]:
        if words is None:
            words = []
        node = node or self.root
        for key, child_node in node.children.items():
            if key == "*":
                words.append(word)
            else:
                self.collect_words(words, child_node, word+key)
        return words
    
    def traverse_trie(self, node=None, word=""):
        node = node or self.root
        for letter, child_node in node.children.items():
            if letter == "*":
                print(f"I found a word: {word}!")
            else:
                self.traverse_trie(child_node, word + letter)

    def autocomplete(self, prefix) -> List[str]:
        curr_node = self.search(prefix)
        if curr_node is None:
            return None
        return self.collect_words(node=curr_node, word=prefix)



words_to_insert = [
    "cat",
    "cab",
    "car",
    "ace",
    "act",
    "add"
]

my_trie = Trie()
for word in words_to_insert:
    my_trie.insert(word)


my_trie.traverse_trie()

print(f"I found the following words {my_trie.collect_words()}")

prefix = "ca"
print(f"For the following prefix '{prefix}' I found the following words: {my_trie.autocomplete(prefix)}")
prefix = "ac"
print(f"For the following prefix '{prefix}' I found the following words: {my_trie.autocomplete(prefix)}")

