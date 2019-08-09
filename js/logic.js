
var life=5;
var sec=0;
var score=0;
var flag=0;
var acu=0;
/*根据传入的值决定靶子出现的速度*/ 
function actionGame(x){
    targetAppear=setInterval(action,x);

}

/*加载屏幕上的靶子*/
function action(){
    acu=(score/flag).toFixed(2);
    $("#life").text("生命:"+life);
    $("#score").text("准确度:"+acu+"%");
    
    if(life>0){
    var x=Math.random()*1000;
    var y=Math.random()*800;
    var $obj=$("<div id='target'><div class='dot'></div><div class='pulse'></div><div class='pulse1'></div></div>"); 
    $obj.css("display","none");
    var obj=$obj.get(0);
    obj.style.position="absolute";
    obj.style.left=x+'px';
    obj.style.top=y+'px';
    $(".main").append($obj);

    $obj.fadeIn(1500);
    $obj.fadeOut(2500,function(e){
    $(this).remove();
    life-=1;
    });
   
    $(".main:not(#target)").click(function(e){
        e.stopPropagation();
        
        flag+=1;
        
    });
   
        $obj.click(function(e){
        e.stopPropagation();
        $(this).remove();
        score+=100;
        flag+=1;
        life+=1;
        
       
        
    });
    
    
   
    }else{
        $("#target").remove();
        over(); 
        
    }
    
   
}

/*游戏结束*/ 
function over(){
        clearInterval(targetAppear);

        clearInterval(calTime);
        alert("你坚持了:"+sec+"秒");
        
        $(".div1").show();
}

//加载单击事件
$(function(e){
    $("#life").text("生命:"+10);
 $("#score").text("准确度:"+0+"%");
    //单击简单模式
    $("#easy").click(function(){
        
        $(".div1").hide();
        time();
         actionGame(1000); 
         life=10;
        
        sec=0;
    });
    //单击困难模式
    $("#hard").click(function(){
        
        $(".div1").hide();
        time();
        actionGame(800); 
        life=10;
       
       sec=0;
   });
  

});

/*产生随机数*/ 
/*function randomNum(minNum,maxNum){
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
}*/

/*游戏计时*/

/*计时的代码*/
function time(){
    calTime=setInterval(function(){
        $("#time").text("计时:"+sec);
        
        sec+=1;

    },1000)     
    
} 
