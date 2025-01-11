var findLadders = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return [];

    let result = [];
    let queue = [[beginWord]];
    let visited = new Set();
    visited.add(beginWord);
    let foundEnd = false;

    while (queue.length && !foundEnd) {
        let levelVisited = new Set();
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let path = queue.shift();
            let lastWord = path[path.length - 1];

            for (let j = 0; j < lastWord.length; j++) {
                for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
                    let newWord = lastWord.substring(0, j) + String.fromCharCode(c) + lastWord.substring(j + 1);
                    if (wordSet.has(newWord) && !visited.has(newWord)) {
                        if (newWord === endWord) {
                            foundEnd = true;
                            result.push([...path, newWord]);
                        } else {
                            queue.push([...path, newWord]);
                            levelVisited.add(newWord);
                        }
                    }
                }
            }
        }
        visited = new Set([...visited, ...levelVisited]);
    }

    return result;
};

// Example
console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log"]));
