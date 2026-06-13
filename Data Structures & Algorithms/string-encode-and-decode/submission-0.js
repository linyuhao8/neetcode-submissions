class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(let str of strs){
            res += str.length + '#' + str;
        }
        // 5#Hello5#World
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            // 找到# 往後找
            while(str[j] !== '#'){
                j++;
            }
            // 找到#之後要拿到encode算的length
            let len = Number(str.substring(i,j));
            // 算出此字串
            let word = str.substring(j+1,j+1+len);
            res.push(word);
            // 往後跳
            i = j + 1 + len;
        }
        return res;
    }
}
