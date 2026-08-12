class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let store = new Set();
        for(let i=0;i<nums.length;i++){
            if(store.has(nums[i])) return nums[i];
            store.add(nums[i]);
        }
        return -1;
    }
}
