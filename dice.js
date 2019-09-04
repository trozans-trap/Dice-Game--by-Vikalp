var image = document.querySelector(".diceimage");
var dice = [ "dice-1.png","dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"];
// var number=[1,2,3,4,5,6];
var rolldices = document.querySelector(".rolldice");
var p1scores = document.querySelector(".p1score");
var newgm = document.querySelector(".newGame");
var score=0;
var randomno;
var t=0;
var count =document.querySelector(".counter");


rolldices.addEventListener("click", function(){ 
 if(t<20)
   {randomno= Math.floor( Math.random() * 6);
	console.log(randomno);
	image.src=dice[randomno];
    score+= Number(randomno) + 1;
    p1scores.textContent=score;	
    count.textContent=20-t-2;
    t+=2;}
})


newgm.addEventListener("click" , function(){
	alert("Last game score : "+ score);
     p1scores.textContent=0;
     score=0;
     t=0;
     count.textContent=20;
})





// var seconds = document.getElementById("countdown").textContent;
// var countdown = setInterval(function() {
//     seconds--;
//     document.getElementById("countdown").textContent = seconds;
//     if (seconds <= 0) clearInterval(countdown);
// }, 1000);



// var time = document.querySelector(".counter");
// var countdown = setInterval(function() {
//     time--;
//     document.getElementById(".counter").textContent = time;
//     if ( time <= 0) clearInterval(counter);
// }, 1000);