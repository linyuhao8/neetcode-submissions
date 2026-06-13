class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        let sort = nums.sort((a,b) => a -b);
        for(let i = 0;i < sort.length;i++){
            // 如果此輪 i 跟上一輪 一樣 就跳過這輪
            if(i > 0 && sort[i] == sort[i-1]){
                continue;
            }
        let l = i+1;
        let r = sort.length-1;
            while(l < r){
                let sum = sort[i] + sort[l] + sort[r];
                if(sum == 0){
                    result.push([sort[i],sort[l],sort[r]]);
                    l++;
                    r--;
                    // 跟上一輪有重複就跳過
                    while(l < r && sort[l] == sort[l-1]){
                        l++;
                    }
                    while(l < r &&　sort[r] == sort[r+1]){
                        r--;
                    }
                }
                // 判斷縮左邊還是右邊
                else if(sum >　0){
                    r--;
                }else{
                    l++;
                }
            }
        }
        return result;
    }
}
