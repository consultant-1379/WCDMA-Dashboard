var rop1ValKPI1 = $("#rop1ValKPI1");
var rop2ValKPI1 = $("#rop2ValKPI1");
var differenceKPI1 = $("#diffIn2RopsKPI1");

var rop1ValKPI2 = $("#rop1ValKPI2");
var rop2ValKPI2 = $("#rop2ValKPI2");
var differenceKPI2 = $("#diffIn2RopsKPI2");

var rop1ValKPI3 = $("#rop1ValKPI3");
var rop2ValKPI3 = $("#rop2ValKPI3");
var differenceKPI3 = $("#diffIn2RopsKPI3");

var rop1ValKPI4 = $("#rop1ValKPI4");
var rop2ValKPI4 = $("#rop2ValKPI4");
var differenceKPI4 = $("#diffIn2RopsKPI4");



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
    if(rop1ValKPI1.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI1.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI1, rop2ValKPI1, differenceKPI1);
    }
    else{
        getReversedDifference(rop1ValKPI1, rop2ValKPI1, differenceKPI1);
    }
    
    if(rop1ValKPI2.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI2.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI2, rop2ValKPI2, differenceKPI2);
    }
    else{
		getReversedDifference(rop1ValKPI2, rop2ValKPI2, differenceKPI2);
    }
    
    
    if(rop1ValKPI3.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI3.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI3, rop2ValKPI3, differenceKPI3);
    }
    else{
    getDifference(rop1ValKPI3, rop2ValKPI3, differenceKPI3);
    }
    
    if(rop1ValKPI4.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI4.text().trim().indexOf("(Empty)")!==-1){
        noData(rop1ValKPI4, rop2ValKPI4, differenceKPI4);
    }
    else{
    getDifference(rop1ValKPI4, rop2ValKPI4, differenceKPI4);
    }
}, 1000);

