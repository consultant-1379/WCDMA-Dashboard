var Elements=new Array();

for (var i=1; i <= 15; i++) {
    if(i==1||i==2||i==7||i==14){
        Elements[i-1]=[-1,("#rop1ValOverKPI"+i),("#rop2ValOverKPI"+i),("#diffIn2RopsOverKPI"+i)];
    }
    else if(i==15){
        Elements[i-1]=[1,("#rop1ValOverKPI"+i),("#rop2ValOverKPI"+i),("#diffIn2RopsOverKPI"+i)];
    }
    else if(i==4){
        Elements[i-1]=[2,("EMPTY"),("EMPTY"+i),("EMPTY"+i)];
    }
    else{
        Elements[i-1]=[1,("#rop1ValOverKPI"+i),("#rop2ValOverKPI"+i),("#diffIn2RopsOverKPI"+i)];
    }
}

function getDifference(lastRopVal, previousRopVal, differenceDiv){
    var rop1Val = $(lastRopVal).text();
    rop1Val = rop1Val.replace(/(\d)\D+$/g, '$1');
    var rop2Val = $(previousRopVal).text();
    var difference = rop1Val-rop2Val;
 
    if((Math.abs(parseFloat(rop1Val)-parseFloat(rop2Val))).toFixed(2)<0.00999999) {
        $(differenceDiv).css("color", "#d9dadb");
        $(differenceDiv).text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
    }else if(parseFloat(rop1Val)>parseFloat(rop2Val)){
        $(differenceDiv).css("color", "#a5c753");
        $(differenceDiv).text("+"+parseFloat(Math.round(difference * 100) / 100).toFixed(2));
    }else{
        $(differenceDiv).css("color", "#e95c38");
        $(differenceDiv).text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
    }

    $(differenceDiv).css({
        "font-size" : 16,
        "font-weight" : "bold"
    });
}

function getInverseDifference(lastRopVal, previousRopVal, differenceDiv){
    
    var rop1Val = $(lastRopVal).text();
    rop1Val = rop1Val.replace(/(\d)\D+$/g, '$1');
    var rop2Val = $(previousRopVal).text();
    var difference = rop1Val-rop2Val;
    if((Math.abs(parseFloat(rop1Val)-parseFloat(rop2Val))).toFixed(2)<0.009999999){
        $(differenceDiv).css("color", "#d9dadb");
        $(differenceDiv).text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
    }else if(parseFloat(rop1Val)<parseFloat(rop2Val)){
        $(differenceDiv).css("color", "#e95c38");
        $(differenceDiv).text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
    }else{
        $(differenceDiv).css("color", "#a5c753");
        $(differenceDiv).text("+"+parseFloat(Math.round(difference * 100) / 100).toFixed(2));
    }

    $(differenceDiv).css({
        "font-size" : 16,
        "font-weight" : "bold"
    });
}

function getNoDifference(lastRopVal, previousRopVal, differenceDiv){
    var rop1Val = $(lastRopVal).text();
    rop1Val = rop1Val.replace(/(\d)\D+$/g, '$1');
    var rop2Val = $(previousRopVal).text();
    var difference = rop1Val-rop2Val;
    if(parseFloat(rop1Val)<parseFloat(rop2Val)){
        $(differenceDiv).text(parseFloat(Math.round(difference * 100) / 100).toFixed(2));
    }else{
        $(differenceDiv).text("+"+parseFloat(Math.round(difference * 100) / 100).toFixed(2));
    }

    $(differenceDiv).css({
        "color" : "#d9dadb",
        "font-size" : 16,
        "font-weight" : "bold"
    });
}

setTimeout(function(){
    for(var i = 0; i < Elements.length; i++) {
        var Element = Elements[i];  
        
            if($(Element[1]).text().trim().indexOf("(Empty)")!==-1 || $(Element[2]).text().trim().indexOf("(Empty)")!==-1){
                $(Element[3]).text("(Empty)");
                $(Element[3]).css({
                    "color" : "#C8C8C8"
				});
            }else
            {
                if (Element[0]==1){
                    getDifference(Element[1], Element[2], Element[3]);
                }
                else if (Element[0]==-1){
                    getInverseDifference(Element[1], Element[2], Element[3]);
                }
                else if (Element[0]==0){
                    getNoDifference(Element[1], Element[2], Element[3]);
                }
                
            }
    }
    }
   , 1000);
   
   
