public class Solution {
    public string LongestPalindrome(string s) {
        string longestString = "";
        for(int i = 0; i < s.Length; i++) {
            string curr = Helper(i, i, s);
            if(curr.Length > longestString.Length) longestString = curr;
            
            curr = Helper(i, i + 1, s);
            if(curr.Length > longestString.Length) longestString = curr;
        }
        return longestString;
    }
    
    private string Helper(int left, int right, string s) {
        while(left >= 0 && right < s.Length && s[left] == s[right]) {
            left--;
            right++;
        }
        return s.Substring(left + 1, right - left - 1);
    }
}
