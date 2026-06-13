class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let cols = Array.from({length:9},() => new Set());
        let rows = Array.from({length:9},() => new Set());
        let boxs = Array.from({length:9},() => new Set());

        for(let i = 0;i < 9;i++){
            for(let j = 0;j < 9;j++){
                let val = board[i][j];
                if(val == '.') continue;
                let boxIndex = Math.floor(i/3) * 3 + Math.floor(j/3);
                if(cols[i].has(val))return false;
                if(rows[j].has(val))return false;
                if(boxs[boxIndex].has(val))return false;
                cols[i].add(val);
                rows[j].add(val);
                boxs[boxIndex].add(val);
            }
        }
        return true;
}
}