class Solution {
    /*
        [10,1,5,6,7,1]
        [10,8,7,5,2]  
     */

    maxProfit(prices) {
        let x = prices[0];
        let maxPrice = 0;
        
        for(let i=0;i<=prices.length-1;i++){
            if(prices[i]-x > maxPrice){
                maxPrice = prices[i]-x;
            }
            if(prices[i]<x){
                x=prices[i];
            }
        }
        return maxPrice;
    }
}
