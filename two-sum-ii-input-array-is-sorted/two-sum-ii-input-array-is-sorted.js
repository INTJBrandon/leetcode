/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let begin = 0;
    let end = numbers.length - 1;
    for (let i = 0; i < numbers.length; i++) {
        let sum = numbers[begin] + numbers[end];
        if (sum > target) {
            end--
        } else if (sum < target) {
            begin++
        } else {
            return [begin + 1, end + 1]
        }
    }; 
};