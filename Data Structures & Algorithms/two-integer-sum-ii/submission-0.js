class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let num1 = 0;
        let num2 = numbers.length - 1;
        let found = false;

        while (num1 < num2) {
            if (numbers[num1] + numbers[num2] == target) {
                found = true;
                break;
            } else  if (numbers[num1] + numbers[num2] > target) {
                num2--;
            } else {
                num1++;
            }
        }

        if (found) return [num1 + 1, num2 + 1]
        else return [0, 0]
    }
}
