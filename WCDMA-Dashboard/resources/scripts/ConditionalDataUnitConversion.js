var calculatedValue=$("#rop1ValKPI"+KPINumber);
var unitElement=$("#dataUnit"+KPINumber);
var deltaValue=$("#diffIn2RopsKPI"+KPINumber);
var dataKPI=$("#dataKPI"+FavoriteID);
var threshold=1000;
var bitToByteThreshold=1;
var currentValue;
var currentDeltaValue;
var units = ["k", "m", "g", "t", "p", "e", "z", "y"];
var bitByte="b";

if(dataKPI.text().indexOf("True")!==-1){
calculatedValue.hide();
unitElement.hide();
deltaValue.hide();
}
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
			deltaValue.text("(EMPTY)");
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
	if(dataKPI.text().indexOf("True")!==-1){
		if (calculatedValue.text().trim().indexOf("(Empty)")!==-1){
			calculatedValue.text("(Empty)");
			}else{
			Convert(0);}
	
	}
	calculatedValue.show();
	unitElement.show();
	deltaValue.show();
}, 1500);