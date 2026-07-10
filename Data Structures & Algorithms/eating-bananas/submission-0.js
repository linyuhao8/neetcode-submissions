class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // Input: piles = [1,4,3,2], h = 9
    // Output: 2

    // Input: piles = [25,10,23,4], h = 4
    // Output: 25

    minEatingSpeed(piles, h) {
        let minMid = 0;
        let max = 0;
        for(let pile of piles){
            max = Math.max(pile,max);
        }

        let l = 1;
        let r = max;

        while(l <= r){
            console.log("l,r:",l,r);
            // 中間值看是否找到 比h小 如果有 就繼續往小找 沒有就往大找
            let mid = Math.floor((l+r)/2);
            // 算出本輪吃完花費的時間
            let time = 0;
            for(let pile of piles){
                // 自動進位
                time += Math.ceil(pile/mid);
            }
            console.log("mid,time:",mid, time);
            if(time <= h){
                minMid = mid;
                r = mid-1;
            }else{
                l = mid+1;
            }
        }
        return minMid;
    }
}
