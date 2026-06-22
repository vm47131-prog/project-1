let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2 =document.querySelector("h2");
document.addEventListener("keypress",function(){//game started when our cusor on document&we press a key
if(started==false){
    console.log("game is started");
    started=true;
    levelUp();
}
});
function gameFlash(btn){
 btn.classList.add("gameflash"); 
 setTimeout(function(){
    btn.classList.remove("gameflash");
 },400);//remove in .4s  
}
function userFlash(btn){
 btn.classList.add("userflash"); 
 setTimeout(function(){
    btn.classList.remove("userflash");
 },400);//remove in  
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    // random button flash
    let randIdx=Math.floor(Math.random()*4);// Output can be: 0, 1,2, or 3
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
function checkAns(idx){
if(userSeq[idx]===gameSeq[idx]){
  if(userSeq.length==gameSeq.length)  
   setTimeout(levelUp,1000);// setTimeout(levelUp(),600) its wrong we pass only reference
}else{
    h2.innerHTML=`Game Over! Your score was <b style="color:green">${level}<b> Press any key to reastart.`;
     document.querySelector(".mainContainer").style.backgroundColor="red";
     setTimeout(function(){
     document.querySelector(".mainContainer").style.backgroundColor="white";   
     },150);
    reset();
}
}
function btnPress(){
    let btn=this;   //this vo hai jaha se ye function trigger hua hai
    userFlash(this); 
    userSeq.push(this.classList[1]);
    // console.log(userSeq);
    checkAns(userSeq.length-1);//we check each entry
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);//btnpress called when btn clicked    
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}