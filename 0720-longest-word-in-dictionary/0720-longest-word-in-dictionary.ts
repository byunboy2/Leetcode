function longestWord(words: string[]): string {
    words.sort();
    let longestWord = "";
    let builtWord = new Set();
    for(const word of words){
        if(builtWord.has(word.slice(0,-1)) || word.length===1){
           builtWord.add(word);
            if(word.length>longestWord.length) longestWord = word;
        }
    }
    return longestWord;
};


