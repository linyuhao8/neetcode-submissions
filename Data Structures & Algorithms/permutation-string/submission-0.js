class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let target = {};
        let check = {};
        // 建立答案map
        for(let s of s1){
            target[s] = (target[s] || 0) + 1;
        }
        let l = 0;
        for(let r = 0;r < s2.length;r++){
            // 記錄每次遇到
            check[s2[r]] = (check[s2[r]] || 0) + 1;
            if((r-l+1) > s1.length){
                check[s2[l]]--;
                l++;
            }
            if(this.same(target,check) == true) return true;
        }
        return false;
    }

    same(map1,map2){
        for(let key in map1){
            if(map1[key] !== map2[key]){return false}
        }
        return true;
    }
}


