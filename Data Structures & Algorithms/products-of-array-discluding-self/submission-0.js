class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // nums = [2, 5, 3, 4]
    // left = [1, 2, 10, 30]   right = [60, 12, 4, 1]
// | index | left | right | left×right | 心算  |
// | ----- | ---- | ----- | ---------- | ----- |
// | 0     | 1    | 60    | 60         | 5×3×4 |
// | 1     | 2    | 12    | 24         | 2×3×4 |
// | 2     | 10   | 4     | 40         | 2×5×4 |
// | 3     | 30   | 1     | 30         | 2×5×3 |
//
// i = 1
// left[i-1] = 1
// nums[i-1] = 2
// left = [1, 2, 1, 1]
// --------

// i = 2
// left[i-1] = 2
// nums[i-1] = 5
// left = [1, 2, 10, 1]
// --------

// i = 3
// left[i-1] = 10
// nums[i-1] = 3
// left = [1, 2, 10, 30]
// --------

// i = 2
// right[i+1] = 1
// nums[i+1] = 4
// right = [1, 1, 4, 1]
// --------

// i = 1
// right[i+1] = 4
// nums[i+1] = 3
// right = [1, 12, 4, 1]
// --------

// i = 0
// right[i+1] = 12
// nums[i+1] = 5
// right = [60, 12, 4, 1]
// --------

    productExceptSelf(nums) {
        let n = nums.length;
        let left = new Array(n).fill(1);
        let right = new Array(n).fill(1);
        let res = [];
        // 從左到右 記錄乘積
        for(let i = 1; i < n; i++){
            left[i] = nums[i-1] * left[i-1];
        }
        // 從右到左 紀錄乘積
        for(let i = n - 2;i >= 0; i--){
            right[i] = nums[i+1] * right[i+1];
        }
        // 互乘
        for(let i = 0; i < n;i++){
            res[i] = left[i] * right[i];
        }
        return res;
    }
}
