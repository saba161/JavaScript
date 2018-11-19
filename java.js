//calculator operations
function insert(act)
{
	var numsarea = document.getElementById("numsarea");
	numsarea.value = numsarea.value + act;
}

function backspace()
{    
    var rekensom  = document.getElementById('numsarea').value;
    document.getElementById('numsarea').value = rekensom.substring(0,rekensom.length -1);
}
//show history
function showHistory() 
{
    var x = document.getElementById('calc');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
//show weather
function showWeather() 
{
    var x = document.getElementById('showWeather');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
//show Val
function showVal() 
{
    var x = document.getElementById('showVal');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
//show facebook
function showFacebook() 
{
    var x = document.getElementById('showFacebook');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

//C-reset
function clean()
{
		document.getElementById('numsarea').value="";
}
//answer
function equal()
{
	var sum = document.getElementById('numsarea').value;
	if(sum){
		document.getElementById('numsarea').value = eval(sum);
	}
}