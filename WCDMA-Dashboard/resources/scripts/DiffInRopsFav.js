var rop1ValKPI16 = $("#rop1ValKPI16");
var rop2ValKPI16 = $("#rop2ValKPI16");
var differenceKPI16 = $("#diffIn2RopsKPI16");
var rop1ValKPI17 = $("#rop1ValKPI17");
var rop2ValKPI17 = $("#rop2ValKPI17");
var differenceKPI17 = $("#diffIn2RopsKPI17");
var rop1ValKPI18 = $("#rop1ValKPI18");
var rop2ValKPI18 = $("#rop2ValKPI18");
var differenceKPI18 = $("#diffIn2RopsKPI18");
var rop1ValKPI19 = $("#rop1ValKPI19");
var rop2ValKPI19 = $("#rop2ValKPI19");
var differenceKPI19 = $("#diffIn2RopsKPI19");
var rop1ValKPI20 = $("#rop1ValKPI20");
var rop2ValKPI20 = $("#rop2ValKPI20");
var differenceKPI20 = $("#diffIn2RopsKPI20");
var KPI1Name = $("#favorite1Name").text();
var KPI2Name = $("#favorite2Name").text();
var KPI3Name = $("#favorite3Name").text();
var KPI4Name = $("#favorite4Name").text();
var KPI5Name = $("#favorite5Name").text();


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
				KPI1Name=KPI1Name.replace(/^[^\(]+/, '');
                $("#favName1").text(KPI1Name);
                $("#favName1").css({
                                                                "font-size" : 13,
                                                                "color" : "#f1f1f1"
                });
				KPI2Name=KPI2Name.replace(/^[^\(]+/, '');
                $("#favName2").text(KPI2Name);
                $("#favName2").css({
                                                                "font-size" : 13,
                                                                "color" : "#f1f1f1"
                });
				KPI3Name=KPI3Name.replace(/^[^\(]+/, '');
                $("#favName3").text(KPI3Name);
                $("#favName3").css({
                                                                "font-size" : 13,
                                                                "color" : "#f1f1f1"
                });
				KPI4Name=KPI4Name.replace(/^[^\(]+/, '');
                $("#favName4").text(KPI4Name);
                $("#favName4").css({
                                                                "font-size" : 13,
                                                                "color" : "#f1f1f1"
                });
				KPI5Name=KPI5Name.replace(/^[^\(]+/, '');
                $("#favName5").text(KPI5Name);
                $("#favName5").css({
                                                                "font-size" : 13,
                                                                "color" : "#f1f1f1"
                });
				
				if(rop1ValKPI16.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI16.text().trim().indexOf("(Empty)")!==-1){
					noData(rop1ValKPI16, rop2ValKPI16, differenceKPI16);
				}else{
					if(KPI1Name.indexOf('Speech Drop Rate (Speech_R)')!==-1 || KPI1Name.indexOf('HS Connection Drop Rate (PacketintHs_R)')!==-1 || KPI1Name.indexOf('Average Session Length for Data Connections (PacketintHs_U_MHT)') !==-1|| KPI1Name.indexOf('Share of Speech Calls Handed Over to GSM (Speech_M_IRATHO_GSM_AR)')!==-1){
									getReversedDifference(rop1ValKPI16, rop2ValKPI16, differenceKPI16);
					}else{
									getDifference(rop1ValKPI16, rop2ValKPI16, differenceKPI16);
					}
				}
				
				if(rop1ValKPI17.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI17.text().trim().indexOf("(Empty)")!==-1){
					noData(rop1ValKPI17, rop2ValKPI17, differenceKPI17);
				}else{
					if(KPI2Name.indexOf('Speech Drop Rate (Speech_R)') !==-1|| KPI2Name.indexOf('HS Connection Drop Rate (PacketintHs_R)') !==-1|| KPI2Name.indexOf('Average Session Length for Data Connections (PacketintHs_U_MHT)')!==-1 || KPI2Name.indexOf('Share of Speech Calls Handed Over to GSM (Speech_M_IRATHO_GSM_AR)')!==-1){
                                getReversedDifference(rop1ValKPI17, rop2ValKPI17, differenceKPI17);
					}else{
                                getDifference(rop1ValKPI17, rop2ValKPI17, differenceKPI17);
					}
				}
				
				
				
				
				if(rop1ValKPI18.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI18.text().trim().indexOf("(Empty)")!==-1){
					noData(rop1ValKPI18, rop2ValKPI18, differenceKPI18);
				}else{
					if(KPI3Name.indexOf('Speech Drop Rate (Speech_R)')!==-1 || KPI3Name.indexOf('HS Connection Drop Rate (PacketintHs_R)')!==-1 || KPI3Name.indexOf('Average Session Length for Data Connections (PacketintHs_U_MHT)')!==-1 || KPI3Name.indexOf('Share of Speech Calls Handed Over to GSM (Speech_M_IRATHO_GSM_AR)')!==-1){
									getReversedDifference(rop1ValKPI18, rop2ValKPI18, differenceKPI18);
					}else{
                                getDifference(rop1ValKPI18, rop2ValKPI18, differenceKPI18);
					}
				}
				
				
				
				if(rop1ValKPI19.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI19.text().trim().indexOf("(Empty)")!==-1){
					noData(rop1ValKPI19, rop2ValKPI19, differenceKPI19);
				}else{
					if(KPI4Name.indexOf('Speech Drop Rate (Speech_R)') !==-1|| KPI4Name.indexOf('HS Connection Drop Rate (PacketintHs_R)')!==-1 || KPI4Name.indexOf('Average Session Length for Data Connections (PacketintHs_U_MHT)')!==-1 || KPI4Name.indexOf('Share of Speech Calls Handed Over to GSM (Speech_M_IRATHO_GSM_AR)')){
                                getReversedDifference(rop1ValKPI19, rop2ValKPI19, differenceKPI19);
					}else{
                                getDifference(rop1ValKPI19, rop2ValKPI19, differenceKPI19);
					}
				}
				
				
				if(rop1ValKPI20.text().trim().indexOf("(Empty)")!==-1 || rop2ValKPI20.text().trim().indexOf("(Empty)")!==-1){
					noData(rop1ValKPI20, rop2ValKPI20, differenceKPI20);
				}else{
					if(KPI5Name.indexOf('Speech Drop Rate (Speech_R)')!==-1 || KPI5Name.indexOf('HS Connection Drop Rate (PacketintHs_R)')!==-1 || KPI5Name.indexOf('Average Session Length for Data Connections (PacketintHs_U_MHT)')!==-1 || KPI5Name.indexOf('SpeechMIRATHOGSMAR')){
                                getReversedDifference(rop1ValKPI20, rop2ValKPI20, differenceKPI20);
					}else{
                                getDifference(rop1ValKPI20, rop2ValKPI20, differenceKPI20);
                }
				}
}, 1000);



