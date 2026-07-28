class Solution {
    public int longestConsecutive(int[] nums) {
        Set<Integer> hashset = Arrays.stream(nums).boxed().collect(Collectors.toSet());
        int[][] seqs = new int[nums.length][];
        int seqCount = 0;
        
        for (int num: nums) {
            boolean isStart = !hashset.contains(num - 1);

            if (isStart) {
                List<Integer> seqPart = new ArrayList<Integer>();
                int count = 0;
                while (hashset.contains(num + count)) {
                    seqPart.add(num + count);
                    count++;
                }
                seqs[seqCount++] = seqPart.stream().mapToInt(i -> i).toArray();
            }
        }
        
        int maxL =0;
        for (int[] seq: seqs) {
            if (seq != null && seq.length >= maxL) maxL = seq.length;
            System.out.println(Arrays.toString(seq));
        }
        return maxL;
    }
}
