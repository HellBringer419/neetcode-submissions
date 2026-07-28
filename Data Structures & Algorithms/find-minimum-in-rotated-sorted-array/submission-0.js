class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        // nums is an array that's sorted and then rotated
        // find the smallest number in this array 
        let l = 0;
        let r = nums.length - 1;
        let min = nums[0]

        while (l <= r) {
            if (nums[l] < nums[r]) {
                min = Math.min(nums[l], min)
                break;
            }

            const m = Math.floor((l+r)/2)
            console.log({m,l,r})
            min = Math.min(nums[m], min)
            if (nums[m] >= nums[l]) 
                l = m + 1;
            else
                r = m - 1;
        }

        return min;
    }
}

        // let pointer = Math.floor(nums.length/2);
        // let found = false;

        // while (!found) {
        //     const currentE = nums[pointer];
        //     let nextIdx = pointer + 1;
        //     let prevIdx = pointer - 1;

        //     if (nextIdx >= nums.length) nextIdx = 0;
            
        //     if (currentE > nums[nextIdx]) {
        //         // found
        //         pointer = nextIdx
        //         found = true
        //     } else if(currentE < nums[prevIdx]) {
        //         // we have reached
        //         found = true
        //     } else {
        //         // somewhere near the prevIdx
        //         if (prevIdx < 0) {

        //         } else {
        //             pointer = Math.floor(pointer/2);
        //         }
        //     }
        // }
        // return nums[pointer]