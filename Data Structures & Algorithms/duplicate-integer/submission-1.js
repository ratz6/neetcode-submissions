class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let customMap = {};
        let result= false;
        if(nums?.length > 0){
            nums?.forEach((item,index)=>{
                if(Object.keys(customMap).includes(`${item}`)){
                    result = true;
                }
                else {
                    customMap[item] = index;
                }
            })
        }
        return result
    }
}
