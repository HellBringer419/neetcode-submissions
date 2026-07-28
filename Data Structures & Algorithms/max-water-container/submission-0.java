class Solution {
    public int maxArea(int[] heights) {
        // brute
        int maxA = 0;
        for (int i=0; i<heights.length; i++) {
            for (int j=0; j<heights.length; j++) {
                int area = Math.min(heights[i], heights[j]) * Math.abs(j -i);
                maxA = Math.max(area, maxA);
            }
        }

        return maxA;
    }
}
