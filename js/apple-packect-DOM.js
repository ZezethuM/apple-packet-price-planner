const form = document.querySelector('.form');
const BoxPrice = document.querySelector(".box");
const numberOfApples = document.querySelector(".apples");
const size = document.querySelector(".size");
const profitEstimate = document.querySelector(".profit");

const numberOfPacketsToSell = document.querySelector(".packets");
const pricePerApple = document.querySelector(".price");
const pricePerPacket = document.querySelector(".perPacket");
const recommendedPacketPrice = document.querySelector(".cost");
const calculateButton = document.querySelector(".button");

const applePacketPricePlanner =  ApplePacketPrice();

calculateButton.addEventListener("click", function(){

    applePacketPricePlanner.setValues(BoxPrice.value, numberOfApples.value, size.value, profitEstimate.value);
   

    applePacketPricePlanner.calculatedPackets(BoxPrice.value, size.value);
    applePacketPricePlanner.costPricePerApple(BoxPrice.value, numberOfApples.value);
    applePacketPricePlanner.costPricePerPacket(BoxPrice.value, size.value);
    applePacketPricePlanner.recommendedPrice(BoxPrice.value, size.value, profitEstimate.value);

    numberOfPacketsToSell.innerHTML = applePacketPricePlanner.getCalculatedPackets();
    pricePerApple.innerHTML = applePacketPricePlanner.getCostPricePerApple();
    pricePerPacket.innerHTML = applePacketPricePlanner.getCostPricePerPacket();
    recommendedPacketPrice.innerHTML = applePacketPricePlanner.getRecommendedPrice();
})





