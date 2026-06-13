class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {}; //key:number val:index
        for(let i = 0; i <　nums.length; i++){
            let char = nums[i];  
            let need = target - char;
            if(map[need] !== undefined){
                return [map[need],i]
            }
            map[char] = i;
        }
    }
}
