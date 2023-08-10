
 class TrieNode{

    constructor(){
        this.children = {}
        this.isWord = false;
    }

    insertWord(word){
        let current = this;
        for (const ch of word){
            if (!current.children[ch]){
                current.children[ch] = new TrieNode()
            }
            current =  current.children[ch]
        }
        current.isWord = true;
    }

    search(prefix){
        let current = this;
        for (const ch of prefix){
            if (!current.children[ch]){
                return undefined;
            }
            current =  current.children[ch]
        }
        return current
    }

    traverse_trie(node=null, word=""){
        node = node || this
        if (node.isWord){
            console.log(`I found a word ${word}`)
        }
        for (const ch in node.children){
            this.traverse_trie(node.children[ch], word + ch);
        }
    }

    collect_words(node=null, words=null, prefix=''){
        if (words === null){
            words = [];
        }
        node = node || this
        if (node.isWord){
            words.push(prefix);
        }
        
        for (const ch in node.children){
            let child = node.children[ch]
            this.collect_words(child, words, prefix+ch)
        }
        return words;
    }

    

    autocomplete(prefix){
        let node = this.search(prefix);
        if (!node){
            return []
        }
        let words = this.collect_words(node, null, prefix);
        return words;
    }
 }


const words_to_insert = [
    "cat",
    "cab",
    "car",
    "ace",
    "act",
    "add"
  ];
  
  const my_trie = new TrieNode();
  for (const word of words_to_insert) {
    my_trie.insertWord(word);
  }
  
  my_trie.traverse_trie();
  
  console.log(`I found the following words ${my_trie.collect_words()}`);
  
  let prefix = "ca";
  console.log(`For the following prefix '${prefix}' I found the following words: ${my_trie.autocomplete(prefix)}`);
  prefix = "ac";
  console.log(`For the following prefix '${prefix}' I found the following words: ${my_trie.autocomplete(prefix)}`);