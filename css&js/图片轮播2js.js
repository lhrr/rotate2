function byid(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}

var index = 0;
var	lens=byid("image_a").getElementsByTagName("a").length;
var dots=byid("dotss").getElementsByTagName("span");
var	timer;
var prev=byid("prev");
var next=byid("next");

function image_moving(){

	var rotation=byid("main");

	rotation.onmouseover=function(){
		clearInterval(timer);
	}

	rotation.onmouseout=function(){
		timer=setInterval(function(){
			index++
			if(index>=lens){
				index = 0;
			}
			moving();
		},2000)
	}
	rotation.onmouseout();

	for(var j=0;j<lens;j++){
		dots[j].id=j;
		dots[j].onclick=function(){
			index=this.id;
			moving();
		}
	}

	prev.onclick=function(){
		index--;
		if(index<0){
			index=lens-1;
		}
		moving();
	}

	next.onclick=function(){
		index++;
		if(index>=lens){
			index=0;
		}
		moving();
	}
}

image_moving();

function moving(){
	for(var i=0;i<lens;i++){
		byid("image_a").getElementsByTagName("a")[i].style.display="none";
		dots[i].className="";
	}

	byid("image_a").getElementsByTagName("a")[index].style.display="block";
	dots[index].className="dot_active"
}