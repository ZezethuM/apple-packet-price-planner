function ApplePacketPrice(){

    let box = 0;
    let applesInBox = 0;
    let packetSize = 0;
    let profit = 0;

    let numberOfPackets = 0;
    let costPerApple = 0;
    let costPerPacket = 0;
    let recommendedSellingPrice = 0;

    function setValues(price, quantity,size, profitValue){
        box = price;
        applesInBox = quantity;
        packetSize = size;
        profit = profitValue;
    }
    // function setBoxPrice(price){
    //     box = price;
    // }
    function getBoxPrice(){
        return box;
    }

    // function setApplesInBox(quantity){
    //     applesInBox = quantity;
    // }
    function getApplesInBox(){
        return applesInBox;
    }
    // function setPacketSize(size){
    //     packetSize = size;
    // }
    function getPacketSize(){
        return packetSize;
    }
    // function setProfit(profitValue){
    //     profit = profitValue;
    // }
    function getProfit(){
        return profit;
    }
    function calculatedPackets(applesInBox, packetSize){
       numberOfPackets = applesInBox / packetSize;
    }
    function getCalculatedPackets(){
        return numberOfPackets;
    }
    function costPricePerApple(box, applesInBox){
        costPerApple = box / applesInBox;
    }
    function getCostPricePerApple(){
        return costPerApple;
    }
    function costPricePerPacket(costPerApple, packetSize){
        costPerPacket = costPerApple * packetSize;
    }
    function getCostPricePerPacket(){
        return costPerPacket;
    }
    function recommendedPrice(costPerPacket, profit){
        recommendedSellingPrice = costPerPacket + (profit * 0.1);
    }
    function getRecommendedPrice(){
        return recommendedSellingPrice;
    }
    return {
        setValues,
        // setBoxPrice,
        getBoxPrice,
        // setApplesInBox,
        getApplesInBox,
        // setPacketSize,
        getPacketSize,
        // setProfit,
        getProfit,
        calculatedPackets,
        getCalculatedPackets,
        costPricePerApple,
        getCostPricePerApple,
        costPricePerPacket,
        getCostPricePerPacket,
        recommendedPrice,
        getRecommendedPrice
    }
}