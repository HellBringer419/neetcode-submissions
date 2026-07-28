class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const nMap = new Map();

        const occ = new Array(nums.length).fill(null);
        for (const e of nums) {
            nMap.set(e, (nMap.get(e) ?? 0) + 1);
        }

        // count reverse
        for (const k of nMap.keys()) {
            if (occ[nMap.get(k)]) occ[nMap.get(k)].push(k);
            else occ[nMap.get(k)] = [k]
        }
        console.log(occ)

        let retArr = [];
        for(let i=occ.length - 1; i>=0; i--) {
            if (!occ[i]) continue;
            for (let n of occ[i]) {
                retArr.push(n)
                if (retArr.length == k) return retArr;
            }
        }
        // let counter = occ.length;
        // while(retArr.length < k) {
        //     counter--;
        //     if(!occ[counter]) continue;

        //     console.log(retArr)
        //     if(occ.length + retArr.length <= k) {
        //         retArr.push(occ[counter])
        //     } else {
        //         retArr.push(occ[counter].slice(0, k - retArr.length))
        //     }
        // }
        return retArr
    }
}
