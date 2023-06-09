public class Solution {
    public int CalPoints(string[] operations) {
        int total = 0;
        List<int> stack = new List<int>();
        for(int i = 0;i<operations.Length; i++){
            string current = operations[i];
            if(current == "+"){
                int sum = 0;
                for(int j = stack.Count-1; j > stack.Count-3; j--){
                    sum+=stack[j];
                }
                stack.Add(sum);
            } else if(current == "D"){
                stack.Add(stack[stack.Count-1]*2);
            } else if(current == "C"){
                stack.RemoveAt(stack.Count-1);
            } else {
                stack.Add(int.Parse(current));
            }
        }
        foreach(var number in stack){
            total+=number;
        }
        return total;
    }
}