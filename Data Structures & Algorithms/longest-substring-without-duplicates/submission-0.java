class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> charSet = new HashSet<>();
        int longest = 0;
        int l=0;

        for (int r=0; r<s.length(); r++) {
            Character rChar = s.charAt(r);
            while (charSet.contains(rChar)) {
                Character lChar = s.charAt(l);
                charSet.remove(lChar);
                l++;
            }
            charSet.add(rChar);
            longest = Math.max(longest, charSet.size());
        }
        return longest;
    }
}
