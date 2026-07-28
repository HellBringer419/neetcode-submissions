class Solution {
    public int maxArea(int[] heights) {
       // 2 pointer
        int l = 0;
        int r = heights.length - 1;

        int max = 0;
        while (l < r) {
            // current
            int area = Math.min(heights[l], heights[r]) * (r - l);
            max = Math.max(max, area);

            // shift
            if (heights[l] < heights[r]) l++;
            else r--;
        }
        return max;
    }
}
