class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let code = ''
        for (const str of strs) {
            code += str.length + "$" + str;
        }
        // console.log(code)
        return code;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = []
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] != "$"){
                j++;
            // console.log({i, j})
            }
            const length = parseInt(str.slice(i, j))
            strs.push(str.slice(j+1, j+1+length))
            i = j+1+length;
        }
        return strs;
    }
}
