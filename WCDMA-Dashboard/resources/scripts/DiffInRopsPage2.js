var rop1ValKPI6 = $("#rop1ValKPI6");
var rop2ValKPI6 = $("#rop2ValKPI6");
var differenceKPI6 = $("#diffIn2RopsKPI6");
var rop1ValKPI7 = $("#rop1ValKPI7");
var rop2ValKPI7 = $("#rop2ValKPI7");
var differenceKPI7 = $("#diffIn2RopsKPI7");
var rop1ValKPI8 = $("#rop1ValKPI8");
var rop2ValKPI8 = $("#rop2ValKPI8");
var differenceKPI8 = $("#diffIn2RopsKPI8");
var rop1ValKPI9 = $("#rop1ValKPI9");
var rop2ValKPI9 = $("#rop2ValKPI9");
var differenceKPI9 = $("#diffIn2RopsKPI9");
var rop1ValKPI10 = $("#rop1ValKPI10");
var rop2ValKPI10 = $("#rop2ValKPI10");
var differenceKPI10 = $("#diffIn2RopsKPI10");



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

function noData(lastRopVal, previousRopVal, differenceDiv){
    differenceDiv.text("(EMPTY)")
    differenceDiv.css({
        "color":"#C8C8C8"
    });
}

setTimeout(function(){
	if(rop1ValKPI6.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI6.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI6, rop2ValKPI6, differenceKPI6);
    }
    else{
		getDifference(rop1ValKPI6, rop2ValKPI6, differenceKPI6);
	}
	
	if(rop1ValKPI7.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI7.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI7, rop2ValKPI7, differenceKPI7);
    }
    else{
	getReversedDifference(rop1ValKPI7, rop2ValKPI7, differenceKPI7);
	}
	
	if(rop1ValKPI8.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI8.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI8, rop2ValKPI8, differenceKPI8);
    }
    else{
	getDifference(rop1ValKPI8, rop2ValKPI8, differenceKPI8);
	}
	
	if(rop1ValKPI9.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI9.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI9, rop2ValKPI9, differenceKPI9);
    }
    else{
		getDifference(rop1ValKPI9, rop2ValKPI9, differenceKPI9);
	}
	
	if(rop1ValKPI10.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI10.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI10, rop2ValKPI10, differenceKPI10);
    }
    else{
	getDifference(rop1ValKPI10, rop2ValKPI10, differenceKPI10);
	}
}, 1000);