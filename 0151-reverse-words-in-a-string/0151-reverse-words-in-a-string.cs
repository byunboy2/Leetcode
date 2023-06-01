public class Solution {
    public string ReverseWords(string s) {
        string[] words = s.Split(' ').Where(word => word.Length > 0).ToArray();
        Array.Reverse(words);
        string reversedString = string.Join(' ', words);
        return reversedString.Trim();
    }
}
