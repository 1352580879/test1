window.onload=function (){
	new TypeIt('#baidu_input', {
			strings: "今天是什么日子"
	    }).go();
	var devHeight=document.documentElement.clientHeight;
	var devWidth=document.documentElement.clientWidth;
	var baidu_input=document.getElementById("baidu_input");
	var baidu_btn=document.getElementById("baidu_btn");
	var next_play=document.getElementById("next_play");
	var chui=document.getElementById("chui");
	var tellArt=document.getElementById("tell-art");
	var our_video=document.getElementById("our_video");
	var musicX=document.getElementById("musicX");
	tellArt.style.right="45px";
	baidu_btn.ontouchstart=function () {
		this.style.backgroundColor="#e8e8e8";
	}
	baidu_btn.ontouchend=function () {
		this.style.backgroundColor="#fff";
	}
	next_play.ontouchstart=function () {
		this.style.backgroundColor="#e8e8e8";
	}
	next_play.ontouchend=function () {
		this.style.backgroundColor="#fff";
	}
	baidu_btn.onclick=function () {
		if( baidu_input.value=="" ){
		}else if( baidu_input.value==="今天是什么日子" ){
		    var startD;
		    clearTimeout(startD);
		    startD=setTimeout(function () {
		        document.title="生日快乐！";
		    	document.querySelector(".baidu").style.display="none";
			    document.querySelector(".se-page").style.display="block";
		    	var musicX=document.getElementById("musicX");
		    	musicX.play();
		    },200);
			
		}else{
			alert("别闹，快点搜一下\"今天是什么日子\"吧！")
		}
	}
	next_play.onclick=function () {
		document.querySelector(".se-page").style.display="none";
		document.querySelector(".vow").style.display="block";
		document.body.className="body-cake";
		document.querySelector(".chui").style.left=(document.body.clientWidth-100)/2+"px";
		setTimeout(function () {
			document.querySelector(".chui").style.display="block";
		},3000);
		our_video.pause();
		our_video.onpause=null;
		musicX.pause();
		// stopp();
	}
	var chuiTimer;
	chui.ontouchstart=function () {
		clearTimeout(chuiTimer);
		chuiTimer=setTimeout(function () {
			var fuegos=document.querySelectorAll(".fuego");
			for(var i=0;i<fuegos.length;i++){
				fuegos[i].classList.add("no-see");
			}
			startSakura();
			var musicY=document.getElementById("musicY");
			var musicW=document.getElementById("musicW");
			setTimeout(function () {
				musicY.play();
			},2100);
			setTimeout(function () {
				itell();
			},2500);
			chui.style.display="none";
			musicW.play();
		},1500);
	}
	chui.ontouchend=function () {
		clearTimeout(chuiTimer);
	}
	our_video.onplay=function () {
	    musicX.pause();
	}
	our_video.onpause=function () {
	    musicX.play();
	}
	;( function () {
		var outTime = document.getElementsByClassName("outTime")[0];
		outTime.style.height=document.documentElement.clientHeight+"px";
	})();
	var clock = new Vue({
	    el: '#clock',
	    data: {
	        time: '',
	        date: ''
	    }
	});
	var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
	var timerID = setInterval(updateTime, 1000);
	updateTime();
	function updateTime() {
	    var cd = new Date();
	    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
	    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
	};
	function zeroPadding(num, digit) {
	    var zero = '';
	    for(var i = 0; i < digit; i++) {
	        zero += '0';
	    }
	    return (zero + num).slice(-digit);
	}
	function itell(){
		var vow=document.querySelector(".vow");
		vow.style.position="fixed";
		vow.style.left=(document.body.clientWidth-200)/2+"px";
		vow.style.top=0;
		var times=parseInt((document.documentElement.clientHeight-vow.clientHeight)/10);
		var moveTimer=setInterval(function (){
			times--;
			vow.style.top=parseInt(vow.style.top)+10+"px";
			if(times<=0){clearInterval(moveTimer);}
		},30);
		new TypeIt('#tell-art')
		.type("让阳光普照你所有的日子，")
		.break()
		.type("让花朵开满你人生的旅途。")
		.break()
		.type("岁月的年轮像旋转着的黑色唱片，")
		.break()
		.type("在我们每一个人的内心深处，")
		.break()
		.type("播放着那美丽的旧日情曲。")
		.break()
		.type("愿你19岁后的人生依然充满着")
		.break()
		.type("欢愉和成功！")
		.break()
		.type("--from 李知恩的男朋友")
		.break()
		.go();
	}
}