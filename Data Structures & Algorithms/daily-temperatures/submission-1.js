class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]} input [30,38,30,36,35,40,28]
     */
    dailyTemperatures(temperatures) {
        // 紀錄 還沒找到比自己大的值
        let stack = [];
        // 預設都是0 後面沒有比自己大的
        let result = new Array(temperatures.length).fill(0);
        // 迴圈跑 O(n)
        for(let i = 0;i < temperatures.length;i++){
            // stack 存放「還沒找到下一個更高溫」的 index
            // stack 內溫度維持由大 -> 小
            // 如果今天比 stack top 高
            // 代表 stack top 找到下一個更高溫，可以出隊(pop) 
            while (stack.length && temperatures[i] > temperatures[stack[stack.length-1]]) {
                // 已經有確定答案 可以從stack取top
                let prev = stack.pop();
                // 計算index區間
                let diffIndex = i - prev;
                // 寫入Result
                result[prev] = diffIndex;
            }
            //每輪都要寫入stack 然後下一輪會檢查 有沒有比之前的大
            //存index 因為要計算 index區間 和 比對值
            stack.push(i);
        }
        return result;
    }
}
