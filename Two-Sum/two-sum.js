/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * Example 1:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Example 2:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */



/**
 * Solution 1: Two for loops
 * Time complexity is O(n^2)
 * Space complexity is O(1)
 */
 var twoSum = function(nums, target) {
    var result;
    
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = 1; j < nums.length; j++){
            if (nums[i] + nums[j] == target) {
                result = [i, j];
                return result;
            }
        }
    }
};



/**
 * Solution 2: Hash Table and a single for loop
 * Time complexity is O(n)
 * Space complexity is O(n)
 */
 var twoSum = function(nums,target){
  var result;
  var hashTable = {};

  for(let i = 0; i < nums.length; i++){
     let counterpart = target - nums[i];
     if(hashTable[counterpart] != null){
        result = [hashTable[counterpart], i];
        return result;
     }
     hashTable[nums[i]] = i;
    }
    return [];
  };



// Testing Using Mocha
    mocha.setup("bdd");
    const { assert } = chai;
    
    describe("twoSum", () => {
      it("return array of indices that sum to target", () => {
        const res = twoSum([2,7,11,15], 9);
        assert.equal(typeof res, "object");
        assert.deepEqual(res, [0,1]);
      });
    });
    
    mocha.run();