class Solution {
    public int longestConsecutive(int[] nums) {
        if (nums.length <= 0) return 0;
        Arrays.sort(nums);

        int lastMaxCount = 0;
        int count = 0;
        int lastNum = nums[0];
        for (int num: nums) {
            System.out.println(num);
            if (lastNum == num) continue;

            if (lastNum + 1 == num) {
                count++;
                System.out.println("increased " + count);
            } else {
                if (count >= lastMaxCount) lastMaxCount = count;
                count = 0;
            }
            lastNum = num;
        }

        if (count >= lastMaxCount) lastMaxCount = count;
        return lastMaxCount + 1;
    }
}
