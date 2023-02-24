function longestWord(words) {
    words.sort();
    const builtWords = new Set();
    let longest = "";
    
    for (const word of words) {
        if (word.length === 1 || builtWords.has(word.slice(0, -1))) {
            builtWords.add(word);
            if (word.length > longest.length) {
                longest = word;
            }
        }
    }
  
    return longest;
}
