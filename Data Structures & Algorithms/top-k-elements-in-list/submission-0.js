class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(let num of nums){
            map.set(num,(map.get(num) || 0) + 1);
        }
        let toArr = Array.from(map);
        let sortArr = toArr.sort(([numA,countA],[numB,countB]) => countB - countA);
        let result = [];
        for(let i = 0;i < k;i++){
            result.push(sortArr[i][0]);
        }
        return result;
    }
}
