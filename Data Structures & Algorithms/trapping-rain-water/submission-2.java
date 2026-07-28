class Solution {
    public int trap(int[] height) {
        int[] L = new int[height.length];
    int temp = 0;
    for (int i = 0; i<height.length; i++) {
      if (height[i] >= temp) {
        temp = height[i];
      }
      L[i] = temp;
    }

    int[] R = new int[height.length];
    temp = 0;
    for (int i = height.length - 1; i>=0; i--) {
      if (height[i] >= temp) {
        temp = height[i];
      }
      R[i] = temp;
    }

    int[] mins = new int[height.length];
    for (int i=0; i< height.length; i++) {
      mins[i] = Math.max(Math.min(L[i], R[i]) - height[i], 0);
    }
    // System.out.println(Arrays.toString(mins));

    // manual sum of int
    int result = 0;
    for (int min: mins) result+=min;
    return result;
    }
}
