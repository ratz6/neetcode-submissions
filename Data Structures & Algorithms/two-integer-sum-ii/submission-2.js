class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let x = 0;
        while(x<= numbers.length-1){
            for(let i=x;i<=numbers.length-1;i++){
                if(target - numbers[x] == numbers[i]){
                    return [x+1,i+1]
                }
            }
            x++;
        }
        return numbers
    }
}
