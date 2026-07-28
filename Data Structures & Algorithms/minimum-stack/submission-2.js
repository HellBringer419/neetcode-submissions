class MinStack {
    stack;
    minStack;

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        const min = this.minStack[this.minStack.length - 1]
        if (min == undefined || min == null) {
            this.minStack.push(val)
        } else {
            if(val <= min)  this.minStack.push(val)
            else this.minStack.push(min) 
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
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
