var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];
    let visited = new Set();
    visited.add(beginWord);

    while (queue.length) {
        let [word, length] = queue.shift();

        for (let i = 0; i < word.length; i++) {
            for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
                let newWord = word.substring(0, i) + String.fromCharCode(c) + word.substring(i + 1);
                if (newWord === endWord) return length + 1;
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, length + 1]);
                }
            }
        }
    }

    return 0;
};

// Example
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]));
