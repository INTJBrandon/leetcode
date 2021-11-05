/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let value = nums[i];
        let pair = target - value;
        if (hash[pair] !== undefined) {
            return [hash[pair], i];
        } else {
            hash[value] = i;
        };
    };
};
