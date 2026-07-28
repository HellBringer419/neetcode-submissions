class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int minPrice = prices[0];
        int maxPrice = prices[0];
        int currentMax = 0;
       for (int price: prices) {
        // std::cout << price << ": " << minPrice << " " << maxPrice << "\n";
            if (price < minPrice) { 
                maxPrice = 0;
                minPrice = price; 
            }
            if (price >= maxPrice) {
                maxPrice = price;
            }
            if (currentMax <= maxPrice -minPrice) {
                currentMax = maxPrice - minPrice;
            }
       }
       return currentMax;
    }
};
