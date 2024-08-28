var rop1ValKPI11 = $("#rop1ValKPI11");
var rop2ValKPI11 = $("#rop2ValKPI11");
var differenceKPI11 = $("#diffIn2RopsKPI11");
var rop1ValKPI12 = $("#rop1ValKPI12");
var rop2ValKPI12 = $("#rop2ValKPI12");
var differenceKPI12 = $("#diffIn2RopsKPI12");
var rop1ValKPI13 = $("#rop1ValKPI13");
var rop2ValKPI13 = $("#rop2ValKPI13");
var differenceKPI13 = $("#diffIn2RopsKPI13");
var rop1ValKPI14 = $("#rop1ValKPI14");
var rop2ValKPI14 = $("#rop2ValKPI14");
var differenceKPI14 = $("#diffIn2RopsKPI14");
var rop1ValKPI15 = $("#rop1ValKPI15");
var rop2ValKPI15 = $("#rop2ValKPI15");
var differenceKPI15 = $("#diffIn2RopsKPI15");



function getDifference(lastRopVal, previousRopVal, differenceDiv){
	var rop1Val = lastRopVal.text();
	rop1Val = rop1Val.replace(/(\d)\D+$/g, '$1');
	var rop2Val = previousRopVal.text();
	var difference = rop1Val-rop2Val;
	if((Math.abs(parseFloat(rop1Val)-parseFloat(rop2Val))).toFixed(2)<0.00999999) {
		differenceDiv.css("color", "#d9dadb");
		differenceDiv.text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
	}else if(parseFloat(rop1Val)>parseFloat(rop2Val)){
		differenceDiv.css("color", "#a5c753");
		differenceDiv.text("+"+parseFloat(Math.round(difference * 100) / 100).toFixed(2));
	}else{
		differenceDiv.css("color", "#e95c38");	
		differenceDiv.text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
	}
	
	differenceDiv.css({
				"font-size" : 16,
				"font-weight" : "bold"
	});
}
function getReversedDifference(lastRopVal, previousRopVal, differenceDiv){
	var rop1Val = lastRopVal.text();
	rop1Val = rop1Val.replace(/(\d)\D+$/g, '$1');
	var rop2Val = previousRopVal.text();
	var difference = rop1Val-rop2Val;
	if((Math.abs(parseFloat(rop1Val)-parseFloat(rop2Val))).toFixed(2)<0.009){
		differenceDiv.css("color", "#d9dadb");
		differenceDiv.text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
	}else if(parseFloat(rop1Val)<parseFloat(rop2Val)){
		differenceDiv.css("color", "#e95c38");
		differenceDiv.text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
	}else{
		differenceDiv.css("color", "#a5c753");
		differenceDiv.text("+"+parseFloat(Math.round(difference * 100) / 100).toFixed(2));
	}
	
	differenceDiv.css({
				"font-size" : 16,
				"font-weight" : "bold"
	});
}

function getNoDifference(lastRopVal, previousRopVal, differenceDiv){
	var rop1Val = lastRopVal.text();
	rop1Val = rop1Val.replace(/(\d)\D+$/g, '$1');
	var rop2Val = previousRopVal.text();
	var difference = rop1Val-rop2Val;
	if((Math.abs(parseFloat(rop1Val)-parseFloat(rop2Val))).toFixed(2)<0.009){
		differenceDiv.css("color", "#d9dadb");
		differenceDiv.text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
	}else if(parseFloat(rop1Val)<parseFloat(rop2Val)){
		differenceDiv.css("color", "#e95c38");
		differenceDiv.text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
	}else{
		differenceDiv.css("color", "#a5c753");
		differenceDiv.text("+"+parseFloat(Math.round(difference * 100) / 100).toFixed(2));
	}
	
	differenceDiv.css({
				"font-size" : 16,
				"font-weight" : "bold"
	});
}

function noData(lastRopVal, previousRopVal, differenceDiv){
    differenceDiv.text("(EMPTY)")
    differenceDiv.css({
        "color":"#C8C8C8"
    });
}



setTimeout(function(){
	if(rop1ValKPI11.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI11.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI11, rop2ValKPI11, differenceKPI11);
    }
    else{
	getDifference(rop1ValKPI11, rop2ValKPI11, differenceKPI11);}
	
	
	
	if(rop1ValKPI12.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI12.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI12, rop2ValKPI12, differenceKPI12);
    }
    else{
	getDifference(rop1ValKPI12, rop2ValKPI12, differenceKPI12);}
	
	
	if(rop1ValKPI13.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI13.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI13, rop2ValKPI13, differenceKPI13);
    }
    else{
	getDifference(rop1ValKPI13, rop2ValKPI13, differenceKPI13);}
	
	
	if(rop1ValKPI14.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI14.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI14, rop2ValKPI14, differenceKPI14);
    }
    else{
	getReversedDifference(rop1ValKPI14, rop2ValKPI14, differenceKPI14);}
	
	
	if(rop1ValKPI15.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI15.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI15, rop2ValKPI15, differenceKPI15);
    }
    else{
	getNoDifference(rop1ValKPI15, rop2ValKPI15, differenceKPI15);}
}, 1000);