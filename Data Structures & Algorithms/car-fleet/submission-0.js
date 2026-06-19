class Solution {

    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number} 
     */

    // Input: target = 10, position = [1,4], speed = [3,2]
    // Input: target = 10, position = [4,1,0,7], speed = [2,2,1,1]

    carFleet(target, position, speed) {
        // 紀錄不同 抵達時間
        let stack = [];
        let cars = [];
        // 每台車的 位置與速度 紀錄
        for(let i = 0;i < position.length;i++){
            cars.push([position[i],speed[i]]);
        }
        // 排序position
        cars.sort((a,b) => b[0] - a[0]);
        for(let car of cars){
            let time = (target-car[0])/car[1];
            if(stack.length == 0 || time > stack[stack.length-1]){
                // 第一台車一定形成 fleet
                // 如果比前面 fleet 更晚到終點，代表追不到，形成新 fleet
                stack.push(time);
            }else{
            // 到達時間 <= 前面 fleet
            // 代表一定追上前面 fleet
            // 不會形成新的 fleet
                continue;
            }
        }
        return stack.length;
    }

}