function groupAnagrams(strs: string[]): string[][] {
    let output = new Map<string, string[]>();
    for(const word of strs){
        const commonWord = word.split("").sort().join("");
        if(!output.has(commonWord)){
            output.set(commonWord,[word])
        } else {
            output.get(commonWord)!.push(word);
        };
    }
    return Array.from(output.values());
};