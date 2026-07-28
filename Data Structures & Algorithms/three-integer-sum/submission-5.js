class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a-b);

        let results = [];
        // console.log(nums)
        for (let i=0; i<nums.length - 1; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue
            // now it's two sum
            const target = 0 - nums[i];
            let second = i + 1;
            let third = nums.length - 1;

            // console.log({ i, second, third })
            while (second < third) {
                // console.log({ second, third })
                if (nums[second] + nums[third] > target) {
                    third--;
                } else if (nums[second] + nums[third] < target) {
                    second++;
                } else {
                    results.push([nums[i], nums[second], nums[third]])
                    // console.log("found")
                    second++;
                    while (nums[second] === nums[second-1]) {
                        second++;
                    }
                }
            }
        }   

        return results;
    }
}
