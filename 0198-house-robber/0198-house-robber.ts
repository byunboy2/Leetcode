function rob(nums: number[]): number {
    let [firstCombo, secondCombo, thirdCombo] = [0,0,0];
    for(const num of nums){
        let tempBase = firstCombo;
        thirdCombo = Math.max(thirdCombo,secondCombo+num);
        firstCombo = Math.max(firstCombo,secondCombo+num);
        secondCombo = tempBase;
    }
    return firstCombo;
};