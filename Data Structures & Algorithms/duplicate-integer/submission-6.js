class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let store = {};
        for(let i=0;i<=nums.length-1;i++){
            if(store[nums[i]]){
                store[nums[i]] = store[nums[i]]+1
            } else {
                store[nums[i]] = 1
            }
        }
        const countArr = Object.values(store);
        let res = false;
        countArr?.forEach((item)=>{
            if(item > 1){
                res=true;
            }
        });
        return res;
    }
}
