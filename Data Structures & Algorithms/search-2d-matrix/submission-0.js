class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    // Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10
    // Output: true
    // Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15
    // Output: false
    searchMatrix(matrix, target) {
        let cols = matrix[0].length;
        let rows = matrix.length;
        let l = 0;
        let r = cols * rows - 1;
        console.log(matrix,l," to ",r," cols:", cols," rows:",rows);
        while(l <= r){
            let mid = Math.floor((l+r)/2); // 算出中間值
            let col = mid % cols; // 計算中間值的col在哪 算出在第幾個col 每個row裡面的第幾格col
            let row = Math.floor(mid / cols); // 計算中間值的row在哪 算出在第幾個row mid / cols 就會是答案
            console.log("當前mid:",mid," col:",col," row:",row,"left:",l,"right",r);
            // row 裡面才是col
            if(matrix[row][col] == target){
                console.log("找到目標");
                // 找到目標
                return true;
            }
            // binary 不是找左邊就是右邊
            if( target > matrix[row][col] ){
                console.log("target比mid大 ","matrix[row][col] ",matrix[row][col],"target",target);
                // target比中間值大 往右邊找
                l = mid + 1;
            }else if(target < matrix[row][col]){
                 console.log("target比mid小 ","matrix[row][col] ",matrix[row][col],"target",target);
                r = mid -1;
            }
        }
        return false;
    }
}
