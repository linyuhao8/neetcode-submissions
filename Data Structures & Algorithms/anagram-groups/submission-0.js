class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        for(let str of strs){
            // 用英文map
            let count = new Array(26).fill(0);
            // 紀錄
            for(let s of str){
                let index = s.charCodeAt(0)-97;
                count[index]++;
            }
            //陣列轉字串
            let key = count.join("#");
            //加入map key:key value:array[]
            if(map.has(key)){
                map.get(key).push(str);
            }else{
                map.set(key,[str]);
            }
        }
         // 轉換成陣列
            let result = Array.from(map.values());
            return result;
    }
}
