class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0){
            return 0;
        }
        let max = 0;
        let set = new Set(nums);
        for(let i = 0;i <　nums.length;i++){
            if(!set.has(nums[i]-1)){
                //找到起點
                let cur = nums[i];
                let count = 1;
                while(set.has(cur + 1)){
                    count++;
                    cur++;
                }
                max = Math.max(count,max);
            }
        }
        return max;
    } 
}
