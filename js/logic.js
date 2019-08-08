
var score=0;
var sec=30;
function actionGame(x){
    targetAppear=setInterval(action,x);
}

function action(){
    if(sec>0){
        var x=Math.random()*800;
    var y=Math.random()*800;
    var $obj=$("<b id='bid'>◎</b>"); 
    var obj=$obj.get(0);
    obj.style.position="absolute";
    obj.style.left=x+'px';
    obj.style.top=y+'px';
    $(".main").append($obj);
    $obj.hide();
    $obj.fadeIn(2000);
    $obj.fadeOut(2000,function(e){
    $obj.remove();
    });
    $("#score").text("score:"+score);
    $obj.css({"cursor":"pointer","color":"red","font-size":"25px"}).click(function(e){
        $(this).remove();
        score+=5;
    });

    }else{
        over(); 
        
    }
    
   
}

function over(){
        clearInterval(calTime);
        alert("你的得分:"+score);
        clearInterval(targetAppear);
        $(".div").show();
}
//加载单击事件
$(function(e){
    $("#easy").click(function(){
        $("#bid").remove();
        $(".div").hide();
        time();
         actionGame(1000); 
        score=0;
        sec=30;
    });
    $("#hard").click(function(){
        $("#bid").remove();
        $(".div").hide();
        time();
        actionGame(700); 
       score=0;
       sec=30;
   });

});

/*产生随机数*/ 
function randomNum(minNum,maxNum){
    switch(arguments.length){
        case 1:
            return
            parseInt(Math.random()*minNum+1,10);
            break;
        case 2:
            return
            parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
        default:
            return 0;
    }
}

/*游戏计时*/
function time(){
    calTime=setInterval(function(){
        $("#time").text("倒计时:"+sec);
        sec-=1;

    },1000)     
} 