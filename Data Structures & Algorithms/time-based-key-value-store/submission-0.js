class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key,[]);
        }
        this.keyStore.get(key).push([timestamp,value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)){
            return "";
        }
        let arr  = this.keyStore.get(key);
        // index
        let l = 0;
        let r = arr.length - 1;
        let result = "";
        while(l <= r){
            // 中間值
            let mid = Math.floor((l+r)/2);
            let midTimestamp = arr[mid][0];
            let midVal = arr[mid][1];
            // 我要找最後一個 <= timestamp 
            if(midTimestamp <= timestamp){
                // 先記錄目前找到 最大答案
                result = midVal;
                // 嘗試往右邊找更大的答案
                l = mid + 1;
            }else{
                // 沒找到 先往左邊走
                r = mid - 1;
            }
        }
        return result;
    }
}
