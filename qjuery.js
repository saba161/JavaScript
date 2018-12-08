//show Weather
$(document).ready(function(){
    $("#showW").click(function(){
        $("#showWeather").show(1000);
    });
    $(".goback").click(function(){
    	$("#showWeather").hide(1000);
    });
});
//show currency
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
//show History
$(document).ready(function(){
	$("#showH").click(function(){
		$("#calc").show(1000);
	});
	$(".goback").click(function(){
		$("#calc").show(1000);
	});
});

var historyArr = [];
$("#equalBtn").click(function(){
	var numsarea = $("input#numsarea").val();

	historyArr.push(numsarea);

	UpdateHistory();
});

function UpdateHistory(){
	var HistoryDiv = $("div#history");
	HistoryDiv.empty();

	var Len = historyArr.length;
	for (var i = 0; i < Len; i++) {
		HistoryDiv.append('<p>' + historyArr[i] + '</p>');
	}
}


