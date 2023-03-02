function letterCombinations(digits: string): string[] {
    if(!digits) return [];
    const all_combinations = [];
    let combination = "";
    const numberToLetterMapping = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    const recursivelyBacktrack=(currentDigit:string, currentCombination:string)=>{
        if(!currentDigit){
            all_combinations.push(currentCombination);
            return
        }
       for(let letter of numberToLetterMapping[ Number(currentDigit[0])]){
            let newCombination = currentCombination + letter;
            recursivelyBacktrack(currentDigit.slice(1),newCombination);
        }
    }
    recursivelyBacktrack(digits,combination);
    return all_combinations;
};


