class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        while(left < right){
            let leftChar = numbers[left];
            let rightChar = numbers[right];
            let res = leftChar + rightChar;
            if(res == target){
                return [left+1,right+1];
            }
            if(res > target){
                right--;
            }else if(res < target){
                left++;
            }
        }
    }
}
