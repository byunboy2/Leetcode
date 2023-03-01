class Solution:
    def addDigits(self, num: int) -> int:
        temp_num = num
        while len(str(temp_num)) != 1:
            sum = 0
            for digit in str(temp_num):
                sum+=int(digit)
            temp_num = sum
        return int(temp_num)