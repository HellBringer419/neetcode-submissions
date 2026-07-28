class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        // inefficient
        int[] result = new int[temperatures.length];
        for (int i=0; i<temperatures.length; i++) {
            int tempToday = temperatures[i];

            boolean found = false;
            int count = 0;
            for (int j=i+1; j<temperatures.length; j++) {
                count++;
                if (temperatures[j] > tempToday) {
                    found = true;
                    break;
                }
            }
            result[i] = found ? count : 0;
        }
        return result;
    }
}
