var calculatedValue=$("#"+PrimaryElement);
var unitElement=$("#"+PrimaryElementDataUnit);
var deltaValue=$("#"+SecondaryElement);
var threshold=1000;
var bitToByteThreshold=1;
var currentValue;
var currentDeltaValue;
var units = ["k", "m", "g", "t", "p", "e", "z", "y"];
var bitByte="b";
var dataUnitToBps = $(".dataUnitToBps");

calculatedValue.hide();
unitElement.hide();
deltaValue.hide();
dataUnitToBps.hide();

function Convert(magnitude){
    currentValue=(parseFloat(calculatedValue.text()));
                
                currentDeltaValue=(parseFloat(deltaValue.text()));
                
    currentValue=currentValue/bitToByteThreshold;
                
    while(currentValue>threshold){
                                currentDeltaValue=currentDeltaValue/threshold;
        currentValue=currentValue/threshold;
        magnitude=magnitude+1;
    }

    calculatedValue.text(currentValue.toFixed([2]));
		if(String(currentDeltaValue).indexOf("NaN")!==-1){
			deltaValue.text("(Empty)");
		}else{
                if(currentDeltaValue>0){
					deltaValue.text("+"+currentDeltaValue.toFixed([2]));
                }else{	
                    deltaValue.text(currentDeltaValue.toFixed([2]));
                }
		}

		unitElement.text(" "+units[magnitude]+bitByte);
	

}

setTimeout(function(){
                if(calculatedValue.text().trim()!="(Empty)"){
					Convert(0);
                }
                calculatedValue.show();
                unitElement.show();
                deltaValue.show();
				dataUnitToBps.show();
}, 2500);
