var localInterval=1;
var timeout;
	
$("#playBtn").click(
    function() {
		$("#Page"+Page+"PlayStatus input").val("Play").blur();
        update();}
);
		
$("#pauseBtn").click(
	function() {
		$("#Page"+Page+"PlayStatus input").val("Pause").blur();		
	}
);

function update(){
    setTimeout(function(){
        localInterval=$("#Page"+Page+"Interval").text();
        timeout=localInterval*1000;
		
    },1000);

    setTimeout(function(){
        setTimeout(function(){
                pageTransition(Page);
        },timeout);
        $("#Clean-up :first-child").click();
    },1500);
}

function pageTransition(targetPage){
    if(typeof $("#Page"+Page+"PlayStatus") != 'undefined' && $("#Page"+Page+"PlayStatus input").val().indexOf('Play')!==-1) {
        $("#button" + targetPage + " :first-child").click();
    }
	else{
		
	}
}

update();