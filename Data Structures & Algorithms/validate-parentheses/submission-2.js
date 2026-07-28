class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (const ch of s) {
            console.log(ch, stack[stack.length - 1])
            let breakLoop = false;
           switch (ch) {
            case '(':
                stack.push('(')
                break;
            case '{':
                stack.push('{')
                break;
            case '[':
                stack.push('[')
                break;

            case ')':
                if (stack[stack.length - 1] !== '(') {
                   breakLoop = true
                } else {
                    stack.pop()
                }
                break;
            case '}':
                if (stack[stack.length - 1] !== '{') {
                   breakLoop = true
                } else {
                    stack.pop()
                }
                break;
            case ']':
                if (stack[stack.length - 1] !== '[') {
                   breakLoop = true
                } else {
                    stack.pop()
                }
                break;
            default:
                // do nothing, eat 5-star
           } 

           if (breakLoop) return false;
        }

        if (stack.length === 0) return true;
        else return false;
    }
}
