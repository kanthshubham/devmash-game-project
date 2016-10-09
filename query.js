$("document").ready(function(){
	start();
});
var rand;
var result;
var point = 0;
function start(){
	rand = (Math.floor(Math.random()*1000)+1);
	$(".num").html(rand);
	if((rand % 2) == 0){
		result = "even";
	}else{
		result = "odd";
	}
};
function check(ans){
	if(result == ans){
		start();
		point++;
		$(".point b").html(point);
	}else{
		start();
		point = 0;
		alert("Nice try but you lose ");
	}
}
