var image = document.querySelector(".diceimage");
var dice = [ "dice-1.png","dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png"];
var rolldices = document.querySelector(".rolldice");
var p1scores = document.querySelector(".p1score");
var newgm = document.querySelector(".newGame");
var score=0;
var randomno;
var t=20;
var count =document.querySelector(".counter");
rolldices.addEventListener("click",update);

function update (){ 
   if(t==20)
   {
   	  counter();
   }
    randomno= Math.floor( Math.random() * 6);
	console.log(randomno);
	image.src=dice[randomno];
    score+= Number(randomno) + 1;
    p1scores.textContent=score;	
}

function counter()
{ 
  if(t<=0)
  {
  	alert("Your Final Score is : " + score);
  	// break;
  }
  else 
  {
  	t--;
  	count.textContent=t;
  }
  setTimeout(function(){counter();},1000);
}

newgm.addEventListener("click" , function(){
	alert("Your Last Game Score is : " + score);
     p1scores.textContent=0;
     score=0;
     t=0;
     count.textContent=20;
})
