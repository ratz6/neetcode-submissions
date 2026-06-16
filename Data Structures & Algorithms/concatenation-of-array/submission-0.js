class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans=[];
        for(let i=0;i<=nums?.length-1;i++){
            ans[i]= nums[i];
        }
        for(let i=0;i<=nums?.length-1;i++){
            ans[nums.length+ i]= nums[i];
        }
        return ans;
    }
}
