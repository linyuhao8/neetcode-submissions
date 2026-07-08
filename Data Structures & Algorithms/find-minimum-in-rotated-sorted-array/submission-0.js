class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0;
        let r = nums.length-1;
        while(l < r){
            let mid = Math.floor((l+r)/2);
            if(nums[mid] > nums[r]){
                // 右邊被反轉過 從右邊找最小 (mid已經比右邊大所以可以被排除 mid+1)
                l = mid + 1;
            }else{
                // mid 有可能就是答案
                // 所以不能跳過 下一輪繼續檢查 r
                r = mid;
            }
        }
        return nums[l];
    }
}
