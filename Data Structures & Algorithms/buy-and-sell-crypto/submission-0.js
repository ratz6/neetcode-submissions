class Solution {
    /*
        [10,1,5,6,7,1]
        [10,8,7,5,2]  
     */

    maxProfit(prices) {
        let x = 0;
        let maxPrice = 0;
        while (x <= prices.length-1){
            for(let i=x+1;i<=prices.length-1;i++){
                if(prices[i]-prices[x] > maxPrice ){
                    maxPrice = prices[i]-prices[x];
                }
            }
            x++;
        }
        return maxPrice;
    }
}
