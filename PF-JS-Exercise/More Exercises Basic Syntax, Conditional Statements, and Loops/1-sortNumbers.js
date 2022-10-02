function sortNumber(num1, num2, num3) {
  nums = [num1, num2, num3];
  nums.sort((a, b) => b - a);//descending
  nums = nums.join("\n");
  console.log(nums);
}
sortNumber(2, 1, 3);
sortNumber(-2, 1, 3);
sortNumber(0, 0, 2);
