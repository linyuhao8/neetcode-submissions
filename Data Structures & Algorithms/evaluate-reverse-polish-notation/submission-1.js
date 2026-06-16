class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let token of tokens){
            if(token == '*' || token == '+' || token == '-' || token == '/'){
                let b = stack.pop();
                let a = stack.pop();
                let result;
                if (token === "+") {
                    result = a + b;
                } else if (token === "-") {
                    result = a - b;
                } else if (token === "*") {
                    result = a * b;
                } else if (token === "/") {
                    result = Math.trunc(a / b);
                }
                console.log("a",a,token,"b",b,"result",result);
                stack.push(result);
            }else{
                let num = Number(token);
                stack.push(num);
                console.log("push",num);
            }
        }
        return stack.pop();
    }
}
