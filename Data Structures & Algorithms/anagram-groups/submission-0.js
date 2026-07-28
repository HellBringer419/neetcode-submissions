class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hcount = new Map();

        for (const str of strs) {
            const chCount = new Array(26).fill(0);

            // console.log(chCount);
            for (const ch of str) {
                chCount[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            // console.log(chCount);
            
            const valueA = hcount.get(JSON.stringify(chCount)) ?? [];
            valueA.push(str);
            // console.log(valueA);
            hcount.set(JSON.stringify(chCount), valueA);
            // console.log()
        }
        return Array.from(hcount.values())
    }
}
