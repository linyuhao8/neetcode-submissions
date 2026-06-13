class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length-1;
        let max = 0;
        while(l < r){
            // 找出比較小的那邊
            let min = Math.min(heights[l],heights[r]);
            let area = min * (r - l);
            max = Math.max(max,area);
            if(heights[l] < heights[r]){
                l++;
            }else{
                r--;
            }
        }
        return max;
    }
}
