function isAlphanumber(code) {
        if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
        }
        else return true
    }
class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        let returnValue = true;
    
        while(start < end) {
            // console.log({ start, end })
            const startCode = s.charCodeAt(start)
            const endCode = s.charCodeAt(end)

            if (isAlphanumber(startCode) && isAlphanumber(endCode)) {
                const char1 = s.charAt(start)
                const char2 = s.charAt(end)

                if (char1.toLowerCase() === char2.toLowerCase()) {
                    start++;
                    end--;
                    // console.log("matched", char1, char2)
                } else {
                    returnValue = false;
                    // console.log({ returnValue, char1, char2 })
                    break;
                }
            } else if (!isAlphanumber(startCode)) {
                // console.log("missing", s.charAt(start))
                start++;
            } else if (!isAlphanumber(endCode)) {
                // console.log("missing", s.charAt(end))
                end--;
            }

            // console.log()
        }
        return returnValue;
    }
}
