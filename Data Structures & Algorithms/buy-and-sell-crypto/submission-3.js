class Solution {
    /*
        [10,1,5,6,7,1]
        [10,8,7,5,2]  
     */

    maxProfit(prices) {
        let minPrice = prices[0];
        let maxPrice = 0;
        
        for(let i=0;i<=prices.length-1;i++){
            if(prices[i]-minPrice > maxPrice){
                maxPrice = prices[i]-minPrice;
            }
            if(prices[i]<minPrice){
                minPrice=prices[i];
            }
        }
        return maxPrice;
    }
}
