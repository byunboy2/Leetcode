public class Solution {
    public string LongestPalindrome(string s) {
        string LongestSubString = "";
        for(int i = 0; i<s.Length; i++){
            string EvenString = Helper(i,i,s);
            string OddString = Helper(i,i+1,s);
            if(EvenString.Length>OddString.Length){
                if(EvenString.Length > LongestSubString.Length) LongestSubString = EvenString;
            } else {
                if(OddString.Length > LongestSubString.Length) LongestSubString = OddString;
            }
        }
        return LongestSubString;
    }
    public string Helper(int left,int right,string s){
        while(left>=0 && right<s.Length && s[left] == s[right]){
            left--;
            right++;
        }
        return s.Substring(left+1,right-left-1);
    }
}

