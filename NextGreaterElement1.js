const nextGreaterElement = function(nums1, nums2) {
    let map = new Map(); //0(n) size of map will increase as we start adding data
    let stack = []; //0(n) depends on the length of numbers nums2 will have

    for(const value of nums2){ //0(n) will go through each value in nums2
        while (stack.length !== 0 && stack[stack.length -1] < value){ //0(1)
            //0(1) map will take constant time to add a value,
            // but it will also take extra space
            map.set(stack.pop(), value);
        }
        stack.push(value); //0(1)
    }

    for (const index in nums1){ //0(n)
        nums1[index] = map.get(nums1[index]) || -1; //0(1)
    }
    return nums1; //0(1)
};//TC: 0(n) and SP: 0(n)

console.log(nextGreaterElement([4,1,2], [1,3,4,2]));
console.log(nextGreaterElement([2,4], [1,2,3,4]));