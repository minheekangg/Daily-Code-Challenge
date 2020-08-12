/**
 * completed 8/5/2020
 * Leetcode - MEDIUM
*/

/**
 * 
 * Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed.
 */

// My Solution
var suggestedProducts = function (products, searchWord) {
    const answer = [];
    const limit = 3;
    const sortedProducts = products.sort();

    for (let idx = 1; idx <= searchWord.length; idx++) {
        const regex = new RegExp(`^${searchWord.slice(0, idx)}`);
        const currentFilter = sortedProducts.filter(e => regex.test(e));
        if (currentFilter.length > limit) {
            currentFilter.splice(limit)
        }
        answer.push(currentFilter);
    }
    return answer;

};

module.exports = suggestedProducts;