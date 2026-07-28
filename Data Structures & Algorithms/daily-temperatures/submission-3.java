class Solution {
    record StackItem(int temp, int index) {}

    public int[] dailyTemperatures(int[] temperatures) {
        int[] values = new int[temperatures.length];
        Arrays.fill(values, 0);

        Deque<StackItem> stack = new ArrayDeque<>(temperatures.length);

        for (int i=0; i<temperatures.length; i++) {
            int temperature = temperatures[i];
            while (stack.size() > 0 && stack.getFirst().temp < temperature) {
                StackItem item = stack.removeFirst();
                values[item.index] = i - item.index;
            }
            stack.addFirst(new StackItem(temperature, i));
        }

        return values;
    }
}
