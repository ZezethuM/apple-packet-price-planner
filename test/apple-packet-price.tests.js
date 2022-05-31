    describe("Test for Apple-packet-price-planner", function(){
        it("It should be able to get price of box" , function(){
           const applePricing = ApplePacketPrice();
           applePricing.setValues(80,10,15,30);
           assert.equal(80, applePricing.getBoxPrice())
        });

        it("It should be able to get number of apples in a box" , function(){
            const applePricing = ApplePacketPrice();
            applePricing.setValues(10,10,15,30);
            assert.equal(10, applePricing.getApplesInBox())
         });
         
         it("It should be able to get packet size" , function(){
            const applePricing = ApplePacketPrice();
            applePricing.setValues(10,10,15,30);
            assert.equal(15, applePricing.getPacketSize());
         });

         it("It should be able to get required profit" , function(){
            const applePricing = ApplePacketPrice();
            applePricing.setValues(10,10,15,30);
            assert.equal(30, applePricing.getProfit());
            
         });

         it("It should be able to calculate number of packets" , function(){
            const applePricing = ApplePacketPrice();
            applePricing.calculatedPackets(20, 10);
            assert.equal(2, applePricing.getCalculatedPackets());
            
         });

         it("It should be able to calculate cost price per apple" , function(){
            const applePricing = ApplePacketPrice();
            applePricing.costPricePerApple(150, 120);
            assert.equal(1.25, applePricing.getCostPricePerApple());
            
         });

         it("It should be able to calculate cost price per packet" , function(){
            const applePricing = ApplePacketPrice();
            applePricing.costPricePerPacket(1.25, 10);
            assert.equal(12.5, applePricing.getCostPricePerPacket());
         });

         it("It should be able to calculate recommended price" , function(){
            const applePricing = ApplePacketPrice();
            applePricing.recommendedPrice(12.5, 50);
            assert.equal(17.5, applePricing.getRecommendedPrice());
         });
    });