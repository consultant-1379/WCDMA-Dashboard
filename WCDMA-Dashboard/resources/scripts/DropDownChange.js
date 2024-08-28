var kpi1=$("#fav1KPIName").text();
var kpi2=$("#fav2KPIName").text();
var kpi3=$("#fav3KPIName").text();
var kpi4=$("#fav4KPIName").text();
var kpi5=$("#fav5KPIName").text();
var kpis=[kpi1,kpi2,kpi3,kpi4,kpi5];

if($("#Storage input").val()){
	$("#favDropdown .sf-element-text-box").text($("#Storage input").val());
}

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
var targetDomId = "favDropdown";

var updateValue = function(oldValue,newValue){
$("#favSelection").text(newVal);
for (i=1;i<6;i++){
	if(newVal.indexOf(i)!==-1){
		$("#Storage input").val(kpis[i-1]).blur();
		$("#favDropdown .sf-element-text-box").text(kpis[i-1]).blur();		
		$("#fav1UnitType input").val($("#getFav"+(i)+"UnitType").text()).blur(); 
		}
	}
}

var target = document.getElementById(targetDomId);
var oldVal = target.innerText.trim();
var callback = function(mutations) {
	newVal=$('#'+targetDomId+' .ComboBoxTextDivContainer').text()
	if(newVal!=oldVal) updateValue(oldVal,newVal)
	oldVal = newVal;
}
var observer = new MutationObserver(callback);
var opts = {
    childList: true, 
    attributes: true, 
    characterData: true, 
    subtree: true
}
observer.observe(target,opts);

function updateListOptions(){
    $(".sf-element-dropdown-list-item").each(function(i,e){
		$("favSelection").text(kpis[i]);
        if(e.innerHTML==("Favorite"+(i+1)) || e.innerHTML==(kpis[i])){
            e.innerHTML=kpis[i];
        }
    })}

$("#favDropdown").on('click',function(){
 // setTimeout(function(){
   updateListOptions();
 //  },250);
})


