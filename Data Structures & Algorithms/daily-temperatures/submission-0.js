class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        // 存放「還沒找到更高溫」的日期 index
        let stack = [];

        // 預設全部填 0
        // 如果最後都沒找到更高溫就維持 0
        let result = Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++){

            // stack 最上面的人(等待區最前面)
            if(stack.length){
                console.log(
                    '目前溫度:',
                    temperatures[i],
                    '比較對象:',
                    temperatures[stack[stack.length-1]]
                );
            }

            // 當前溫度比等待區最上面的人高
            // 代表幫他找到答案了
            while(
                stack.length &&
                temperatures[i] >
                temperatures[stack[stack.length-1]]
            ){

                // 取出等待區最上面的人
                let prev = stack.pop();

                // prev 這一天終於找到更高溫
                // 相隔天數 = 目前日期 - prev日期
                result[prev] = i - prev;

                console.log(
                    `Day${prev}(${temperatures[prev]})
                    -> 找到更高溫 Day${i}(${temperatures[i]})
                    相隔 ${result[prev]} 天`
                );
            }

            // 自己還不知道未來有沒有更高溫
            // 先進等待區
            stack.push(i);

            console.log(
                '目前等待區:',
                stack.map(index => temperatures[index])
            );
        }

        return result;
    }
}