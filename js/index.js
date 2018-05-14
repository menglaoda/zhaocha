//文档内容加载完毕后触发此事件
window.onload=function(){
	//获取元素节点
	var zhezhao = document.querySelector(".zhezhao");
	var guize = document.querySelector(".guize");
	var queding_btn = document.querySelector(".queding_btn");
	var play = document.querySelector(".play");
	var replays = document.querySelector(".replays");
	var next = document.querySelector(".next");
	var gongxi = document.querySelector(".gongxi");
	var help = document.querySelector(".help");
	var jindutiao = document.querySelector(".jindutiao");
	var miao = document.querySelector(".miao");
	var chu = document.querySelector(".chu");
	var guan = document.querySelector(".guan");
	var leftimg = document.querySelector(".leftimg");
    var leftimg_img = leftimg.querySelectorAll("img");
    var rightimg = document.querySelector(".rightimg");
    var rightimg_img = rightimg.querySelectorAll("img");
	//游戏状态，over未开启，underway开启
	var game = "over";
	//当前关卡
	var dqguanka = 1;
	//点击规则框确定按钮，若正在进行游戏，规则框消失，遮罩层消失；反之，规则框消失，开始游戏框弹出
	queding_btn.onclick = function(){
		//判断游戏状态
		if(game=="underway"){			
			guize.style.display = "none";
			zhezhao.style.display = "none";
		}else{
			guize.style.display = "none";
		    play.style.display = "block";
		}
	}
	var sheng_miao = 0;//剩余的秒数
	var timemiao;
	//开启游戏
	function startgame(){
		game = "underway";
		//剩余秒数初始值
		shengmax = miao.innerHTML;
		//变化的秒数
		sheng_miao = miao.innerHTML;
		clearInterval(timemiao);
		timemiao =setInterval(function(){
			sheng_miao--;			
			miao.innerHTML = sheng_miao;
			//进度条width改变
			jindutiao.style.width = (294*sheng_miao/shengmax)+"px";
			//当剩余秒数小于10时，字体颜色变红
			if(sheng_miao<=10){
				miao.style.color = "red";
			}else{
				miao.style.color = "white";   
			}
			//当剩余秒数为0时，判断是否已全部找出来，下一关或重新开始
			if(sheng_miao<=0){
				clearInterval(timemiao);
				zhezhao.style.display = "block";
				game = "over";
				if(chu.innerHTML==0){
					next.style.display = "block";
				}else{
					replays.style.display = "block";
				}
			}
			console.log(game);
		},1000)
	}
	//点击开始游戏
	play.onclick = function(){
		play.style.display = "none";
		zhezhao.style.display = "none";
		startgame();
	}
	//生命
    //初始生命10
    var xueliang = 10 ;
    var shengming = document.querySelector(".shengming");
    var shengming_img =shengming.querySelectorAll("img"); 
    leftimg.onclick = function(){
    	xueliang--;
    	if(xueliang==0){
    		if(chu.innerHTML!=0){
    			zhezhao.style.display = "block";
    			replays.style.display = "block";
    		}
    	}else{
    		shengming_img[xueliang].style.display = "none";
    	}
    	
    }
    rightimg.onclick = function(){
    	xueliang--;
    	if(xueliang==0){
    		if(chu.innerHTML!=0){
    			zhezhao.style.display = "block";
    			replays.style.display = "block";
    		}
    	}else{
    		shengming_img[xueliang].style.display = "none";
    	}
    	
    }
    //点击重新开始游戏,进行第一关
    replays.onclick = function(){
    	//数据初始化，并开始游戏
    	replays.style.display = "none";
    	guize.style.display = "none";
    	zhezhao.style.display = "none";
    	leftimg_img[0].src = "img/tu1.png";
    	rightimg_img[0].src = "img/tu11.png";
    	for(var i=1;i<10;i++){
    		shengming_img[i].style.display = "inline-block";
    	}
    	//血量
    	xueliang = 10;
    	//当前关卡
    	dqguanka = 1;
    	butong();
    	jindutiao.style.width = 294+"px";
    	miao.innerHTML = 60;
    	chu.innerHTML = 5;
    	guan.innerHTML = 1+"/"+10;
    	diyichu[0].style.left = 203 +"px";
	    diyichu[0].style.top = 158 +"px";
	    diyichu[0].style.width= 40+"px";
	    diyichu[0].style.height= 40+"px";
	    diyichu[1].style.left = 203 +"px";
	    diyichu[1].style.top = 158 +"px";
	    diyichu[1].style.width= 40+"px";
	    diyichu[1].style.height= 40+"px";
	    dierchu[0].style.left = 198 +"px";
	    dierchu[0].style.top = 115 +"px";
	    dierchu[1].style.left = 198 +"px";
	    dierchu[1].style.top = 115 +"px";
	    disanchu[0].style.left = 201 +"px";
	    disanchu[0].style.top = 290 +"px";
	    disanchu[0].style.width = 40 +"px";
	    disanchu[1].style.left = 201 +"px";
	    disanchu[1].style.top = 290 +"px";
	    disanchu[1].style.width = 40 +"px";
	    disichu[0].style.left = 98 +"px";
	    disichu[0].style.top = 260 +"px";
	    disichu[0].style.width = 40 +"px";
	    disichu[0].style.height = 40 +"px";
	    disichu[1].style.left = 98 +"px";
	    disichu[1].style.top = 260 +"px";
	    disichu[1].style.width = 40 +"px";
	    disichu[1].style.height = 40 +"px";
	    diwuchu[0].style.left = 384 +"px";
	    diwuchu[0].style.top = 174 +"px";
	    diwuchu[0].style.height = 40+"px";
	    diwuchu[0].style.width= 40+"px";
	    diwuchu[1].style.left = 384 +"px";
	    diwuchu[1].style.top = 174 +"px";
	    diwuchu[1].style.height = 40+"px";
	    diwuchu[1].style.width= 40+"px";
    	startgame();
    }
    //点击？按钮
    help.onclick = function(){
    	zhezhao.style.display = "block";
    	guize.style.display = "block";
    }
    //点击图片不同的地方
    var diyichu = document.querySelectorAll(".diyichu");
    var dierchu = document.querySelectorAll(".dierchu");
    var disanchu = document.querySelectorAll(".disanchu");
    var disichu = document.querySelectorAll(".disichu");
    var diwuchu = document.querySelectorAll(".diwuchu");
    butong();
    //给不同处绑定点击事件并透明度为0
    function butong(){
    	diyichu[0].addEventListener("click",yifn,false);
	    diyichu[1].addEventListener("click",yifn,false);
	    dierchu[0].addEventListener("click",erfn,false);
	    dierchu[1].addEventListener("click",erfn,false);
	    disanchu[0].addEventListener("click",sanfn,false);
	    disanchu[1].addEventListener("click",sanfn,false);
	    disichu[0].addEventListener("click",sifn,false);
	    disichu[1].addEventListener("click",sifn,false);
	    diwuchu[0].addEventListener("click",wufn,false);
	    diwuchu[1].addEventListener("click",wufn,false);
	    diyichu[0].style.opacity = 0;
	    diyichu[0].style.filter = "alpha(opacity=0)";
	    diyichu[1].style.opacity = 0;
	    diyichu[1].style.filter = "alpha(opacity=0)";
	    dierchu[0].style.opacity = 0;
	    dierchu[0].style.filter = "alpha(opacity=0)";
	    dierchu[1].style.opacity = 0;
	    dierchu[1].style.filter = "alpha(opacity=0)";
	    disanchu[0].style.opacity = 0;
		disanchu[0].style.filter = "alpha(opacity=0)";
		disanchu[1].style.opacity = 0;
		disanchu[1].style.filter = "alpha(opacity=0)";
		disichu[0].style.opacity = 0;
		disichu[0].style.filter = "alpha(opacity=0)";
		disichu[1].style.opacity = 0;
		disichu[1].style.filter = "alpha(opacity=0)";
		diwuchu[0].style.opacity = 0;
		diwuchu[0].style.filter = "alpha(opacity=0)";
		diwuchu[1].style.opacity = 0;
		diwuchu[1].style.filter = "alpha(opacity=0)";
    }
    //调用chufn函数判断是否已全部找出不同之处
    function chufn(){
    	if(chu.innerHTML==0){
    		zhezhao.style.display = "block";
    		clearInterval(timemiao);
    		if(guan.innerHTML=="10/10"){
    			gongxi.style.display = "block";
    		}else{
	    		next.style.display = "block";
    		}
    	}
    }
    function yifn(){
    	//剩余不同处减一
    	chu.innerHTML -= 1;
    	//样式发生改变，并去掉点击事件
    	diyichu[0].style.opacity = 1;
    	diyichu[0].style.filter = "alpha(opacity=90)";
    	diyichu[0].removeEventListener("click",yifn);
    	diyichu[1].style.opacity = 1;
    	diyichu[1].style.filter = "alpha(opacity=90)";
    	diyichu[1].removeEventListener("click",yifn);
    	chufn();
    }
    function erfn(){
    	//剩余不同处减一
    	chu.innerHTML -= 1;
    	//样式发生改变，并去掉点击事件
    	dierchu[0].style.opacity = 1;
    	dierchu[0].style.filter = "alpha(opacity=90)";
    	dierchu[0].removeEventListener("click",erfn);
    	dierchu[1].style.opacity = 1;
    	dierchu[1].style.filter = "alpha(opacity=90)";
    	dierchu[1].removeEventListener("click",erfn);
    	chufn();
    }
    function sanfn(){
    	//剩余不同处减一
    	chu.innerHTML -= 1;
    	//样式发生改变，并去掉点击事件
    	disanchu[0].style.opacity = 1;
    	disanchu[0].style.filter = "alpha(opacity=90)";
    	disanchu[0].removeEventListener("click",sanfn);
    	disanchu[1].style.opacity = 1;
    	disanchu[1].style.filter = "alpha(opacity=90)";
    	disanchu[1].removeEventListener("click",sanfn);
    	chufn();
    }
    function sifn(){
    	//剩余不同处减一
    	chu.innerHTML -= 1;
    	//样式发生改变，并去掉点击事件
    	disichu[0].style.opacity = 1;
    	disichu[0].style.filter = "alpha(opacity=90)";
    	disichu[0].removeEventListener("click",sifn);
    	disichu[1].style.opacity = 1;
    	disichu[1].style.filter = "alpha(opacity=90)";
    	disichu[1].removeEventListener("click",sifn);
    	chufn();
    }
    function wufn(){
    	//剩余不同处减一
    	chu.innerHTML -= 1;
    	//样式发生改变，并去掉点击事件
    	diwuchu[0].style.opacity = 1;
    	diwuchu[0].style.filter = "alpha(opacity=90)";
    	diwuchu[0].removeEventListener("click",wufn);
    	diwuchu[1].style.opacity = 1;
    	diwuchu[1].style.filter = "alpha(opacity=90)";
    	diwuchu[1].removeEventListener("click",wufn);
    	chufn();
    }
    //点击下一关
    //1.切换图片  2.初始化数据  3.修改不同处的位置 4.开启游戏
    next.onclick = function(){
    	dqguanka++;
    	for(var i=1;i<10;i++){
    		shengming_img[i].style.display = "inline-block";
    	}
    	xueliang = 10;
    	guan.innerHTML = dqguanka+"/"+10;
    	chu.innerHTML = 5;
    	jindutiao.style.width = 294+"px";
    	next.style.display = "none";
    	zhezhao.style.display = "none";
    	//第二关
    	if(dqguanka==2){
    		leftimg_img[0].src = "img/tu2.png";
    	    rightimg_img[0].src = "img/tu22.png";
    	    miao.innerHTML = 57;
    	    diyichu[0].style.left = 96 +"px";
    	    diyichu[0].style.top = 318 +"px";
    	    diyichu[0].style.width= 100+"px";
    	    diyichu[1].style.left = 96 +"px";
    	    diyichu[1].style.top = 318 +"px";
    	    diyichu[1].style.width= 100+"px";
    	    dierchu[0].style.left = 197 +"px";
    	    dierchu[0].style.top = 278 +"px";
    	    dierchu[1].style.left = 197 +"px";
    	    dierchu[1].style.top = 278 +"px";
    	    disanchu[0].style.left = 352 +"px";
    	    disanchu[0].style.top = 218 +"px";
    	    disanchu[1].style.left = 352 +"px";
    	    disanchu[1].style.top = 218 +"px";
    	    disichu[0].style.left = 340 +"px";
    	    disichu[0].style.top = 337 +"px";
    	    disichu[1].style.left = 340 +"px";
    	    disichu[1].style.top = 337 +"px";
    	    diwuchu[0].style.left = 30 +"px";
    	    diwuchu[0].style.top = 232 +"px";
    	    diwuchu[1].style.left = 30 +"px";
    	    diwuchu[1].style.top = 232 +"px";
    	    butong();
    	    startgame();
    	}
    	//第三关
    	if(dqguanka==3){
    		leftimg_img[0].src = "img/tu3.png";
    	    rightimg_img[0].src = "img/tu33.png";
    	    miao.innerHTML = 54;
    	    diyichu[0].style.left = 2 +"px";
    	    diyichu[0].style.top = 326 +"px";
    	    diyichu[0].style.width= 100+"px";
    	    diyichu[0].style.height= 50+"px";
    	    diyichu[1].style.left = 2 +"px";
    	    diyichu[1].style.top = 326 +"px";
    	    diyichu[1].style.width= 100+"px";
    	    diyichu[0].style.height= 50+"px";
    	    dierchu[0].style.left = 160 +"px";
    	    dierchu[0].style.top = 260 +"px";
    	    dierchu[1].style.left = 160 +"px";
    	    dierchu[1].style.top = 260 +"px";
    	    disanchu[0].style.left = 429 +"px";
    	    disanchu[0].style.top = 138 +"px";
    	    disanchu[1].style.left = 429 +"px";
    	    disanchu[1].style.top = 138 +"px";
    	    disichu[0].style.left = 308 +"px";
    	    disichu[0].style.top = 393 +"px";
    	    disichu[1].style.left = 308 +"px";
    	    disichu[1].style.top = 393 +"px";
    	    diwuchu[0].style.left = 410 +"px";
		    diwuchu[0].style.top = 240 +"px";
		    diwuchu[0].style.height= 80+"px";
		    diwuchu[1].style.left = 410 +"px";
		    diwuchu[1].style.top = 240 +"px";
		    diwuchu[1].style.height= 80+"px";
    	    butong();
    	    startgame();    
    	}
    	//第四关
    	if(dqguanka==4){
    		leftimg_img[0].src = "img/tu4.png";
    	    rightimg_img[0].src = "img/tu44.png";
    	    miao.innerHTML = 51;
    	    diyichu[0].style.left = 168 +"px";
    	    diyichu[0].style.top = 112 +"px";
    	    diyichu[0].style.width= 100+"px";
    	    diyichu[0].style.height= 40+"px";
    	    diyichu[1].style.left = 168 +"px";
    	    diyichu[1].style.top = 112 +"px";
    	    diyichu[1].style.width= 100+"px";
    	    diyichu[0].style.height= 40+"px";
    	    dierchu[0].style.left = 85 +"px";
    	    dierchu[0].style.top = 147 +"px";
    	    dierchu[1].style.left = 85 +"px";
    	    dierchu[1].style.top = 147 +"px";
    	    disanchu[0].style.left = 289 +"px";
    	    disanchu[0].style.top = 235 +"px";
    	    disanchu[1].style.left = 289 +"px";
    	    disanchu[1].style.top = 235 +"px";
    	    disichu[0].style.left = 73 +"px";
    	    disichu[0].style.top = 253 +"px";
    	    disichu[0].style.width = 56 +"px";
    	    disichu[0].style.height = 56 +"px";
    	    disichu[1].style.left = 73 +"px";
    	    disichu[1].style.top = 253 +"px";
    	    disichu[1].style.width = 56 +"px";
    	    disichu[1].style.height = 56 +"px";
    	    diwuchu[0].style.left = 412 +"px";
		    diwuchu[0].style.top = 292 +"px";
		    diwuchu[0].style.height= 80+"px";
		    diwuchu[1].style.left = 412 +"px";
		    diwuchu[1].style.top = 292 +"px";
		    diwuchu[1].style.height= 80+"px";
    	    butong();
    	    startgame();    
    	}
    	//第五关
    	if(dqguanka==5){
    		leftimg_img[0].src = "img/tu5.png";
    	    rightimg_img[0].src = "img/tu55.png";
    	    miao.innerHTML = 48;
    	    diyichu[0].style.left = 212 +"px";
    	    diyichu[0].style.top = 340 +"px";
    	    diyichu[0].style.width= 75+"px";
    	    diyichu[0].style.height= 21+"px";
    	    diyichu[1].style.left = 212 +"px";
    	    diyichu[1].style.top = 340 +"px";
    	    diyichu[1].style.width= 75+"px";
    	    diyichu[1].style.height= 21+"px";
    	    dierchu[0].style.left = 104 +"px";
    	    dierchu[0].style.top = 210 +"px";
    	    dierchu[1].style.left = 104 +"px";
    	    dierchu[1].style.top = 210 +"px";
    	    disanchu[0].style.left = 126 +"px";
    	    disanchu[0].style.top = 264 +"px";
    	    disanchu[1].style.left = 126 +"px";
    	    disanchu[1].style.top = 264 +"px";
    	    disichu[0].style.left = 297 +"px";
    	    disichu[0].style.top = 269 +"px";
    	    disichu[0].style.width = 48 +"px";
    	    disichu[0].style.height = 22 +"px";
    	    disichu[1].style.left = 297 +"px";
    	    disichu[1].style.top = 269 +"px";
    	    disichu[1].style.width = 48 +"px";
    	    disichu[1].style.height = 22 +"px";
    	    diwuchu[0].style.left = 336 +"px";
		    diwuchu[0].style.top = 168 +"px";
		    diwuchu[0].style.height= 50+"px";
		    diwuchu[1].style.left = 336 +"px";
		    diwuchu[1].style.top = 168 +"px";
		    diwuchu[1].style.height= 50+"px";
    	    butong();
    	    startgame();    
    	}
    	//第六关
    	if(dqguanka==6){
    		leftimg_img[0].src = "img/tu6.png";
    	    rightimg_img[0].src = "img/tu66.png";
    	    miao.innerHTML = 45;
    	    diyichu[0].style.left = 417 +"px";
    	    diyichu[0].style.top = 375 +"px";
    	    diyichu[0].style.width= 30+"px";
    	    diyichu[0].style.height= 30+"px";
    	    diyichu[1].style.left = 417 +"px";
    	    diyichu[1].style.top = 375 +"px";
    	    diyichu[1].style.width= 30+"px";
    	    diyichu[1].style.height= 30+"px";
    	    dierchu[0].style.left = 142 +"px";
    	    dierchu[0].style.top = 195 +"px";
    	    dierchu[1].style.left = 142 +"px";
    	    dierchu[1].style.top = 195 +"px";
    	    disanchu[0].style.left = 177 +"px";
    	    disanchu[0].style.top = 353 +"px";
    	    disanchu[1].style.left = 177 +"px";
    	    disanchu[1].style.top = 353 +"px";
    	    disichu[0].style.left = 207 +"px";
    	    disichu[0].style.top = 216 +"px";
    	    disichu[0].style.width = 30 +"px";
    	    disichu[0].style.height = 30 +"px";
    	    disichu[1].style.left = 207 +"px";
    	    disichu[1].style.top = 216 +"px";
    	    disichu[1].style.width = 30 +"px";
    	    disichu[1].style.height = 30 +"px";
    	    diwuchu[0].style.left = 228 +"px";
		    diwuchu[0].style.top = 68 +"px";
		    diwuchu[0].style.height= 40+"px";
		    diwuchu[1].style.left = 228 +"px";
		    diwuchu[1].style.top = 68 +"px";
		    diwuchu[1].style.height= 40+"px";
    	    butong();
    	    startgame();    
    	}
    	//第七关
    	if(dqguanka==7){
    		leftimg_img[0].src = "img/tu7.png";
    	    rightimg_img[0].src = "img/tu77.png";
    	    miao.innerHTML = 42;
    	    diyichu[0].style.left = 68 +"px";
    	    diyichu[0].style.top = 334 +"px";
    	    diyichu[0].style.width= 30+"px";
    	    diyichu[0].style.height= 30+"px";
    	    diyichu[1].style.left = 68 +"px";
    	    diyichu[1].style.top = 334 +"px";
    	    diyichu[1].style.width= 30+"px";
    	    diyichu[1].style.height= 30+"px";
    	    dierchu[0].style.left = 180 +"px";
    	    dierchu[0].style.top = 230 +"px";
    	    dierchu[1].style.left = 180 +"px";
    	    dierchu[1].style.top = 230 +"px";
    	    disanchu[0].style.left = 308 +"px";
    	    disanchu[0].style.top = 348 +"px";
    	    disanchu[1].style.left = 308 +"px";
    	    disanchu[1].style.top = 348 +"px";
    	    disichu[0].style.left = 223 +"px";
    	    disichu[0].style.top = 100 +"px";
    	    disichu[0].style.width = 30 +"px";
    	    disichu[0].style.height = 30 +"px";
    	    disichu[1].style.left = 223 +"px";
    	    disichu[1].style.top = 100 +"px";
    	    disichu[1].style.width = 30 +"px";
    	    disichu[1].style.height = 30 +"px";
    	    diwuchu[0].style.left = 379 +"px";
		    diwuchu[0].style.top = 171 +"px";
		    diwuchu[0].style.height= 40+"px";
		    diwuchu[1].style.left = 379 +"px";
		    diwuchu[1].style.top = 171 +"px";
		    diwuchu[1].style.height= 40+"px";
    	    butong();
    	    startgame();    
    	}
    	//第八关
    	if(dqguanka==8){
    		leftimg_img[0].src = "img/tu8.png";
    	    rightimg_img[0].src = "img/tu88.png";
    	    miao.innerHTML = 39;
    	    diyichu[0].style.left = 189 +"px";
    	    diyichu[0].style.top = 228 +"px";
    	    diyichu[0].style.width= 30+"px";
    	    diyichu[0].style.height= 30+"px";
    	    diyichu[1].style.left = 189 +"px";
    	    diyichu[1].style.top = 228 +"px";
    	    diyichu[1].style.width= 30+"px";
    	    diyichu[1].style.height= 30+"px";
    	    dierchu[0].style.left = 130 +"px";
    	    dierchu[0].style.top = 293 +"px";
    	    dierchu[1].style.left = 130 +"px";
    	    dierchu[1].style.top = 293 +"px";
    	    disanchu[0].style.left = 241 +"px";
    	    disanchu[0].style.top = 289 +"px";
    	    disanchu[1].style.left = 241 +"px";
    	    disanchu[1].style.top = 289 +"px";
    	    disichu[0].style.left = 338 +"px";
    	    disichu[0].style.top = 147 +"px";
    	    disichu[0].style.width = 30 +"px";
    	    disichu[0].style.height = 30 +"px";
    	    disichu[1].style.left = 338 +"px";
    	    disichu[1].style.top = 147 +"px";
    	    disichu[1].style.width = 30 +"px";
    	    disichu[1].style.height = 30 +"px";
    	    diwuchu[0].style.left = 260 +"px";
		    diwuchu[0].style.top = 243 +"px";
		    diwuchu[0].style.height= 40+"px";
		    diwuchu[1].style.left = 260 +"px";
		    diwuchu[1].style.top = 243 +"px";
		    diwuchu[1].style.height= 40+"px";
    	    butong();
    	    startgame();    
    	}
    	//第九关
    	if(dqguanka==9){
    		leftimg_img[0].src = "img/tu9.png";
    	    rightimg_img[0].src = "img/tu99.png";
    	    miao.innerHTML = 36;
    	    diyichu[0].style.left = 0 +"px";
    	    diyichu[0].style.top = 65 +"px";
    	    diyichu[0].style.width= 100+"px";
    	    diyichu[0].style.height= 60+"px";
    	    diyichu[1].style.left = 0 +"px";
    	    diyichu[1].style.top = 65 +"px";
    	    diyichu[1].style.width= 100+"px";
    	    diyichu[1].style.height= 60+"px";
    	    dierchu[0].style.left = 106 +"px";
    	    dierchu[0].style.top = 336 +"px";
    	    dierchu[1].style.left = 106 +"px";
    	    dierchu[1].style.top = 336 +"px";
    	    disanchu[0].style.left = 380 +"px";
    	    disanchu[0].style.top = 346 +"px";
    	    disanchu[1].style.left = 380 +"px";
    	    disanchu[1].style.top = 346 +"px";
    	    disichu[0].style.left = 198 +"px";
    	    disichu[0].style.top = 140 +"px";
    	    disichu[0].style.width = 30 +"px";
    	    disichu[0].style.height = 30 +"px";
    	    disichu[1].style.left = 198 +"px";
    	    disichu[1].style.top = 140 +"px";
    	    disichu[1].style.width = 30 +"px";
    	    disichu[1].style.height = 30 +"px";
    	    diwuchu[0].style.left = 273 +"px";
		    diwuchu[0].style.top = 250 +"px";
		    diwuchu[0].style.height= 40+"px";
		    diwuchu[1].style.left = 273 +"px";
		    diwuchu[1].style.top = 250 +"px";
		    diwuchu[1].style.height= 40+"px";
    	    butong();
    	    startgame();    
    	}
    	//第十关
    	if(dqguanka==10){
    		leftimg_img[0].src = "img/tu10.png";
    	    rightimg_img[0].src = "img/tu101.png";
    	    miao.innerHTML = 33;
    	    diyichu[0].style.left = 46 +"px";
    	    diyichu[0].style.top = 124 +"px";
    	    diyichu[0].style.width= 70+"px";
    	    diyichu[0].style.height= 50+"px";
    	    diyichu[1].style.left = 46 +"px";
    	    diyichu[1].style.top = 124 +"px";
    	    diyichu[1].style.width= 70+"px";
    	    diyichu[1].style.height= 50+"px";
    	    dierchu[0].style.left = 136 +"px";
    	    dierchu[0].style.top = 292 +"px";
    	    dierchu[1].style.left = 136 +"px";
    	    dierchu[1].style.top = 292 +"px";
    	    disanchu[0].style.left = 355 +"px";
    	    disanchu[0].style.top = 293 +"px";
    	    disanchu[0].style.width = 80 +"px";
    	    disanchu[1].style.left = 355 +"px";
    	    disanchu[1].style.top = 293 +"px";
    	    disanchu[1].style.width = 80 +"px";
    	    disichu[0].style.left = 284 +"px";
    	    disichu[0].style.top = 383 +"px";
    	    disichu[0].style.width = 30 +"px";
    	    disichu[0].style.height = 30 +"px";
    	    disichu[1].style.left = 284 +"px";
    	    disichu[1].style.top = 383 +"px";
    	    disichu[1].style.width = 30 +"px";
    	    disichu[1].style.height = 30 +"px";
    	    diwuchu[0].style.left = 259 +"px";
		    diwuchu[0].style.top = 174 +"px";
		    diwuchu[0].style.height= 50+"px";
		    diwuchu[0].style.width= 50+"px";
		    diwuchu[1].style.left = 259 +"px";
		    diwuchu[1].style.top = 174 +"px";
		    diwuchu[1].style.height= 50+"px";
		    diwuchu[1].style.width= 50+"px";
    	    butong();
    	    startgame();    
    	}
    }
    
}
