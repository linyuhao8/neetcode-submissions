class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = {};
        let maxFreq = 0;
        let result = 0;
        let l = 0;
        for(let r = 0;r <　s.length;r++){
            // 紀錄現在的 出現次數
            map[s[r]] = (map[s[r]] || 0) + 1;
            // 如果超過max 那就紀錄最多的出現次數
            maxFreq = Math.max(map[s[r]],maxFreq);
            // 檢查是否已經超出限制 最多k個 可隨意替代 超過就縮L
            // 當前windowSize - maxFreq(當前窗口寬度-同數出現最多 = 隨意可填數字) 是否 > k
            while(((r-l+1) - maxFreq) >　k){
                map[s[l]]--;
                l++;
            }
            // 計算此輪窗口寬度
            result = Math.max(r-l+1,result);
        }
        return result;
    }
}
