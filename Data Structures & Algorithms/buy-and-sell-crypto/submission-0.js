class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    let min = Infinity;
    let result = 0;
    for(let i = 0;i < prices.length;i++){
        console.log("round",i);
        // 紀錄遇到的最小值
        min = Math.min(prices[i],min);
        if (i > 0 && prices[i] > min) {
            let res = prices[i] - min;
            result = Math.max(result,res);
        }
    }
    return result;
    }
}
