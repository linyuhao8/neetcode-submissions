
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // 先進後出
        let stack = [];
        let map = {'[':']','{':'}','(':')'};
        for(let c of s){
            // 遇到左邊
            if(map[c]){
                // 右邊推入stack
                stack.push(map[c]);
            }else{
                // 遇到右邊 檢查 map裡面的lastest key 是否等於左邊
                if(stack.pop() !== c){
                    return false;
                }
            }
        }
        return stack.length==0;
    }
}