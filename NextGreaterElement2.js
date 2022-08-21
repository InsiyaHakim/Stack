const nextGreaterElementInAnArray = function(nums) {
    let stack = []; //0(n) coz we can only have decreases values and all values will be added in stack

    //This loop will always go in forward direction and will never repeat values it has already gone through
    for(let value = 0 ; value < nums.length; value++){ //0(n) will go through each element
        if(nums[value+1] === undefined) { //0(1)
            nums[value] = -1; //0(n)
            while(stack.length !== 0){ // it will run n times
                nums[stack.pop()] = -1; //0(1)
            }
            return nums;
        }

        if(nums[value] < nums[value+1]){ //0(1)
            nums[value] = nums[value+1]; //0(1)
            while(stack.length !== 0 && stack[stack.length -1] < nums[value+1]){ // it will run n times
                nums[stack.pop()] = nums[value+1]; //0(1)
            }
        }
        else {
            stack.push(value); //0(1)
        }

    }
};//TC: 0(n) and SP: 0(n)

console.log(nextGreaterElementInAnArray([1,2,1] ));
console.log(nextGreaterElementInAnArray([1,2,3,4,3,7] ));
console.log(nextGreaterElementInAnArray([1,2,3,4,3,7,9,5,6] ));
console.log(nextGreaterElementInAnArray([9,8,7,6,5] ));

const nextGreaterElementInAnArray2 = function(nums) {
    let stack = []; //0(n) in worse case we have decreasing values and all values gets added to stack

    stack.push(nums[nums.length -1]); //0(1)
    nums[nums.length -1] = -1; //0(1)

    for(let value = nums.length-2; value >= 0; value--){ //0(n)
        while (stack.length && stack[stack.length - 1] <= nums[value]){
            stack.pop(); //0(1)
        }

        const prevValue = nums[value]; //0(1)
        nums[value] = !stack.length ? -1 : stack[stack.length - 1]; //0(1)
        stack.push(prevValue); //0(1)
    }
    return nums;
};//TC: 0(n) and SP: 0(n)

console.log(nextGreaterElementInAnArray2([4,12,5,3,1,2,5,3,1,2,4,6] ));


