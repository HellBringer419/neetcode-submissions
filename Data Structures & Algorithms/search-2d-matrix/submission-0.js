class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let t = 0;
        let b = matrix.length - 1;

        while (t <= b) {
            let midV = Math.floor(t + (b-t)/2);
            let lengthArrMid = matrix[midV].length

            if (matrix[midV][0] > target) {
                // go up
                b = midV - 1;
            } else if(matrix[midV][lengthArrMid - 1] < target) {
                // go down
                t = midV + 1;
            } else {
                break;
            }
        }

        // Passed the whole array but couldn't find the target array
        if (t > b) return false;

        const midV = Math.floor(t + (b-t)/2);
        const nums = matrix[midV]
        let l = 0;
        let r = nums.length - 1;

        while (l <= r) {
            let midH = Math.floor(l + (r - l)/2);

            if (nums[midH] > target) {
                // go left

                r = midH - 1;
            } else if (nums[midH] < target) {
                // go right
                l = midH + 1;
            } else {
                return true;
            }
        }
        return false;
   }
}
