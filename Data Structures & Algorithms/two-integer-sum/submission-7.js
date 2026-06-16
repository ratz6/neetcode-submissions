class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        let x=0;
        while(x<=nums.length-1){
            for(let i=x+1;i<=nums.length-1;i++){
                console.log(x,i);
                if(target - nums[i] === nums[x]){
                    return [x,i]
                }
            }
            x++;
        }
        console.log('2nd',x);
    }
}
