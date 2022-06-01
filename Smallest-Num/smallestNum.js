/**
 * @param {positive number[]} nums
 * @return {number}
 * 
 * Example 1:
 * Input: nums = [3]
 * Output: 1
 * 
 * Example 2:
 * Input: nums = [1, 1, 1, 1]
 * Output: 5
 * 
 * Example 3:
 * Input: nums = [2, 7, 11, 15]
 * Output: 1
 * 
 * Example 4:
 * Input: nums = [1, 2, 3, 4, 5, 6, 11]
 * Output: 33
 */



/**
 * Solution 1: Sorting and a single for loop
 * Time Complexity is O(n + sorting time)
 * Space Complexity is O(1) 
 */
var smallestNum = function(Nums) {
    //Sorting the array in ascending order
    Nums.sort((a,b)=>{
        a - b;
    })
    //By default 1 is an answer as it is the smallest number among all positive integer
    let chosen = 1;
    for(let i = 0; i < Nums.length; i++){
        if(chosen >= Nums[i]){
            chosen = chosen + Nums[i];
        }else if(chosen < Nums[i]){
            return chosen;
        }
    }
    return chosen;
}



//Testing using Mocha
mocha.setup("bdd");
    const { assert } = chai;
    
    describe("smallestNum", () => {
      it("return the smallest number", () => {
        const res = smallestNum([3]);
        assert.equal(typeof res, "number");
        assert.equal(res, 1);
      });
    });

    describe("smallestNum", () => {
        it("return the smallest number", () => {
          const res = smallestNum([1, 1, 1, 1]);
          assert.equal(typeof res, "number");
          assert.equal(res, 5);
        });
      });

      describe("smallestNum", () => {
        it("return the smallest number", () => {
          const res = smallestNum([2, 7, 11, 15]);
          assert.equal(typeof res, "number");
          assert.equal(res, 1);
        });
      });

      describe("smallestNum", () => {
        it("return the smallest number", () => {
          const res = smallestNum([1, 2, 3, 4, 5, 6, 11]);
          assert.equal(typeof res, "number");
          assert.equal(res, 33);
        });
      });

    mocha.run();