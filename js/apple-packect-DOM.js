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

})




form.onsubmit = e => {
    e.preventDefaut();
}

