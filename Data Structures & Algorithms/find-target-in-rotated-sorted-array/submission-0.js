class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // nums = [3,4,5,6,1,2], target = 1  a:4
    // nums = [3,5,6,0,1,2], target = 4  a:-1
    // nums = [5,6,1,2,3,4], target = 1  a:2
    search(nums, target) {
        let l = 0;
        let r = nums.length-1;
        while(l <= r){
          let mid = Math.floor((l+r)/2);
          if(target == nums[mid]){
            return mid;
          }
          if(nums[mid] > nums[r]){
            // 完整排序在左邊 
            // 檢查target是否在左邊排序區間內 [l,mid] 
            if(target >= nums[l] && target < nums[mid]){
              r = mid - 1;
            }else{
              l = mid + 1;
            }
          }else{
            // 完整排序在右邊 
            // 檢查target是否在右邊排序區間內 [mid,r]
            if(target > nums[mid] && target <= nums[r]){
              l = mid + 1;
            }else{
              r = mid - 1;
            }
          }
        }
        return -1;
    }
}
