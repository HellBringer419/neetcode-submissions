class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let wcS = new Map();
        let wcT = new Map();
        if(s.length !== t.length) return false;

        for (let c of s) {
            if (wcS.has(c)) wcS.set(c, wcS.get(c) + 1);
            else wcS.set(c, 1);
        }
        for (let c of t) {
            if (wcT.has(c)) wcT.set(c, wcT.get(c) + 1);
            else wcT.set(c, 1);
        }
        for (let c of s) {
            if (wcT.get(c) !== wcS.get(c)) return false
        }
        return true;
    }
}
