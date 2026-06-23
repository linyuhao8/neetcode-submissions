class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length-1;
        while(l <= r){
            let mid = Math.floor((r+l)/2);
            console.log(l,mid,r);
            if(nums[mid] == target){
                return mid; 
            }
            if(target > nums[mid]){
                //大於往右邊找
                l = mid + 1;
            }else{
                //小於往左邊找
                r = mid - 1;
            }
        }
        return -1;
    }
}
