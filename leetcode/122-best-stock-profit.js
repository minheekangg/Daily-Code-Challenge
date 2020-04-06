var maxProfit = function (prices) {
    if (!prices || prices.length === 0) return 0;

    let answer = 0;
    let buy = prices[0];
    let sell = prices[0];
    for (let i = 1; i < prices.length; i++) {
        let current = prices[i];
        if (current >= buy && (current > sell)) {
            sell = current;
            console.log('current switch', current, sell)
        } else if (current >= buy && (current < sell)) {
            answer += (sell - buy);
            buy = current;
            sell = current;
            console.log('need to sell', current, sell)
        } else if (current < buy) {
            console.log('current is less', answer)
            answer += (sell - buy);
            sell = current;
            buy = current;
            console.log('sold', answer, sell, buy)
        }

    }
    answer += (sell - buy)

    return answer;
};