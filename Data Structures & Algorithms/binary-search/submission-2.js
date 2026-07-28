function recS(nums, target, startIndex, endIndex) {
        const mid = Math.floor(nums.length/2); // math.floor
        console.log({ startIndex, endIndex, mid })
        if (nums[mid] == target) {
            console.log('found')
            return mid + startIndex;
        }
        else if (nums.length == 1) return -1; 
        else if (nums[mid] > target) {
            return recS(nums.slice(0, mid), target, startIndex, startIndex + mid - 1);
        }
        else {
            return recS(nums.slice(mid, nums.length), target, startIndex + mid, endIndex);
        }
    }
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        return recS(nums, target, 0, nums.length - 1) 
    }
}
