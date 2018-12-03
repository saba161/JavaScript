//show Weather
$(document).ready(function(){
    $("#showW").click(function(){
        $("#showWeather").show(1000);
    });
    $(".goback").click(function(){
    	$("#showWeather").hide(1000);
    });
});
//show Val
$(document).ready(function(){
	$("#showV").click(function(){
		$("#showVal").show(1000);
	});
	$(".goback").click(function(){
		$("showVal").hide(1000);
	})
});
//show Facebook
$(document).ready(function(){
	$("#showF").click(function(){
		$("#showFacebook").show(1000);
	});
	$(".goback").click(function(){
		$("#showFacebook").hide(1000);
	});
});

