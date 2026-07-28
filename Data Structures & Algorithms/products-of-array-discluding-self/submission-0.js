class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let newNums = []
        let product = 1;
        for (let i=0; i<nums.length; i++) {
            product *= nums[i]
        }
        for (let j=0; j<nums.length; j++) {
            if (nums[j] == 0) {
                let productN = 1;
                for (let k=0; k<nums.length; k++) {
                    if (k !== j) {
                        console.log({ productN, k })
                        productN *= nums[k]
                    }
                }
                newNums.push(productN)
            } else {
                newNums.push(product/nums[j])
            }
        }
        return newNums;
    }
}
