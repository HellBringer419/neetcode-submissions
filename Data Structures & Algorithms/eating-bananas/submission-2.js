function canIEatAll(piles, h, speed) {
    let time = 0;
    for (const d of piles) {
        time += Math.ceil(d/speed);
    } 
    // console.log(time, speed, time <= h)
    return time <= h;
}

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        // l = sum(piles) / h
        const min = Math.ceil(piles.reduce((acc, curr) => acc + curr, 0)/h);
        // r = max(piles)
        const max = piles.reduce((acc, cur) => cur > acc ? cur: acc);
        
        // possible values
        // let p = []
        // for (let i = min; i <= max; i++) {
        //     p.push(i);
        // }

        let l =0;
        let r = max;
        let speed = max;
        while (l <= r) {
            let mid =Math.floor(l + (r - l)/2);
            const possible = canIEatAll(piles, h, mid);
            // console.log({ mid, possible, l, r })
            if (possible) {
                // consider this value if it's smaller
                speed = Math.min(mid, speed);
                // search smaller values
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return speed;
    }
}
