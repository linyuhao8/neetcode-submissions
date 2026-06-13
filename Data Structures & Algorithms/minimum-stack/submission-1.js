class MinStack {
    constructor() {
        this.stack = []; // 紀錄寫入的 stack
        this.minStack = []; // 紀錄最小的 每輪加入的是否有比之前更小
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.minStack.length === 0){
            this.minStack.push(val);
        }else{
            // 比較最後一次推入的數
            this.minStack.push(Math.min(val,this.minStack[this.minStack.length-1]));
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        // stack最高是 最後放的
        return this.stack[this.stack.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
        // 最後一個就是最小
        return this.minStack[this.minStack.length-1];
    }
}
