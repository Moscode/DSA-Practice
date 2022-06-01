/**
 * @param {positive number[]} nums
 * @return {number[]}
 * 
 * Example 1:
 * Input: nums = [2, 3, 5, 4, 8, 6, 7, 12, 13]
 * Output: [2, 4, 8, 6, 12, 3, 7, 5, 13]
 * 
 * Example 2:
 * Input: nums = [2, 13, 5, 4, 7, 9, 3]
 * Output: [2, 4, 5, 13, 7, 9, 3]
 * 
 * Example 3:
 * Input: nums = [2, 7, 11, 15]
 * Output: [2, 7, 11, 15]
 * 
 * Example 4:
 * Input: nums = [1, 2, 3, 4, 5, 6, 11]
 * Output: [2, 4, 6, 1, 3, 5, 11]
 */


/**
 * Solution 1: Using two pointers to swap the items
 * Time Complexity is O(n)
 * Space Complexity is O(1)
 */
var evenFirst = function(nums){
    let i = 0;
    let j = i + 1;
    while(j < nums.length - 1){
    if(nums[i] % 2 == 0){
        i += 1;
        if(nums[j] % 2 !=0){
            j += 1;
        }else{
            j += 1;
        }
    }else{
        if(nums[j] % 2 == 0){
            evenVal = nums[j];
            nums[j] = nums[i];
            nums[i] = evenVal;
            i += 1
        }else{
            j += 1;
        }
    }
}
return nums;
}



//Test using Mocha
mocha.setup("bdd");
const { assert } = chai;

describe("evenFirst", () => {
    it("return an array with even first then odd", () => {
        const res = evenFirst([2, 3, 5, 4, 8, 6, 7, 12, 13]);
        assert.equal(typeof res, "object");
        assert.deepEqual(res, [2, 4, 8, 6, 12, 3, 7, 5, 13]);
    })
})
describe("evenFirst", () => {
    it("return an array with even first then odd", () => {
        const res = evenFirst([2, 13, 5, 4, 7, 9, 3]);
        assert.equal(typeof res, "object");
        assert.deepEqual(res, [2, 4, 5, 13, 7, 9, 3]);
    })
})
describe("evenFirst", () => {
    it("return an array with even first then odd", () => {
        const res = evenFirst([2, 7, 11, 15]);
        assert.equal(typeof res, "object");
        assert.deepEqual(res, [2, 7, 11, 15]);
    })
})
describe("evenFirst", () => {
    it("return an array with even first then odd", () => {
        const res = evenFirst([1, 2, 3, 4, 5, 6, 11]);
        assert.equal(typeof res, "object");
        assert.deepEqual(res, [2, 4, 6, 1, 5, 3, 11]);
    })
})

mocha.run();