const nextGreaterElementCircularArray = function(nums) {
    let stack = []; //0(n) in worse case we have decreasing values and all values gets added to stack
    let length = nums.length;

    for(let i = length -2; i >= 0; i--){
        while (stack.length && stack[stack.length - 1] <= nums[i]){
            stack.pop()
        }
        stack.push(nums[i]);
    }

    for(let i = length -1; i >= 0; i--){
        while (stack.length && stack[stack.length - 1] <= nums[i]){
            stack.pop()
        }
        let prev = nums[i];
        nums[i] = !stack.length ? -1 : stack[stack.length - 1]
        stack.push(prev)
    }
    return nums;

};//TC: 0(2n + 2n) => 0(n) and SP: 0(n)

console.log(nextGreaterElementCircularArray([1,2,1]));
console.log(nextGreaterElementCircularArray([4,12,5,3,1,2,5,3,1,2,4,6] ));


