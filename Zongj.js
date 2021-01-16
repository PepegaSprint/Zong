let arr=new Array();
let arrInLine=[];
let arrInLineAfter=[];
let arrTable=[];
let AllScore=0;
let cubesCnt=6;
let score=0;
let zonkCnt=0;
let bank=0;
let img;
let line=7;
let cube =6;
let isValid = true;
let numberOfRound=0;
let bImg;
let inScore
var ReplaceBackground = function()
{
    var query = window.location.href.split("=");
    switch(+query[1]){
        case 0:
        bImg='url(https://bgfons.com/upload/ornaments_texture1130.jpg)';
        break;
        case 1:
        bImg='url(https://ramki-photoshop.ru/fony/fon-220.jpg)';
        break;
        case 2:
        bImg='url(https://www.itl.cat/pics/b/28/286022_pepe-wallpaper.jpg)';
        break;
    }
    document.body.style.backgroundImage=bImg;
    switch(+query[2]){
        case 0:
        inScore=10000;
        break;
        case 1:
        inScore=11000;
        break;
        case 2:
        inScore=12000;
        break;
    }
    let element = document.querySelector('h1');   
    element.textContent= element.textContent+" "+query[3];
}
document.addEventListener("DOMContentLoaded", ReplaceBackground);


function Graphics(p){
    switch(p)
    {
        case 1: 
        img='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1114px-Dice-1-b.svg.png';
        break;
        case 2: 
        img='https://img2.freepng.ru/20180713/cz/kisspng-dice-black-and-white-number-clip-art-red-dice-5b493591034a97.9537610715315244970135.jpg';
        break;
        case 3: 
        img='https://www.clipartmax.com/png/middle/16-167949_number-3-dice-clipart-black-and-white-side-3-of-dice.png';
        break;
        case 4: 
        img='https://www.clipartmax.com/png/full/13-134115_four-on-a-dice.png';
        break;
        case 5: 
        img='https://www.clipartmax.com/png/middle/6-68663_dice-clipart-single-arithmetic.png';
        break;
        case 6: 
        img='https://img2.freepng.ru/20180403/cgq/kisspng-yahtzee-dice-game-clip-art-dice-5ac4049d1b96a1.263382361522795677113.jpg';
        break;

        
    }
}
function Graphics2(p){  
    let t; 
    switch(p)
    {
        case 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dice-1-b.svg/1114px-Dice-1-b.svg.png")':
        t=1;
        break;
        case 'url("https://img2.freepng.ru/20180713/cz/kisspng-dice-black-and-white-number-clip-art-red-dice-5b493591034a97.9537610715315244970135.jpg")':
        t=2;
        break;
        case'url("https://www.clipartmax.com/png/middle/16-167949_number-3-dice-clipart-black-and-white-side-3-of-dice.png")':
        t = 3;
        break;
        case'url("https://www.clipartmax.com/png/full/13-134115_four-on-a-dice.png")':
        t = 4;
        break;
        case'url("https://www.clipartmax.com/png/middle/6-68663_dice-clipart-single-arithmetic.png")':
        t = 5;
        break;
        case'url("https://img2.freepng.ru/20180403/cgq/kisspng-yahtzee-dice-game-clip-art-dice-5ac4049d1b96a1.263382361522795677113.jpg")':
        t = 6;
        break;   
    }
    return t
}
function winGame(){
  
    alert("Ваши набранные очки = "+bank+ "Необходимое количество очков = " + inScore);
    if(bank>=inScore)
        alert("Вы победили!")
    else
        alert("Казик поглотил вас")
    let elements = document.querySelectorAll('.r');
    let t=1;
    numberOfRound=0;
    zonkCnt=0;
    bank=0;
    for(let e of elements){
        e.textContent=t;
        t++;
    }

}
function start(){
    if(isValid)
    {
    let elements = document.querySelectorAll('.dice');
    for(let r of elements){
        r.style.backgroundImage=""; 
    }
    line--;
        cube=cube-arrInLine.length;
    if(cube==0) 
    {
        cube=6;
        let elements = document.querySelectorAll('.block');
        for(let y of elements){
            y.style.backgroundImage="";
        }  
        arr.length=0;
        arrInLine.length=0; 
        line=6;
    }
    arr.length=0;
    Random(cube);  
    arrInLine.length=0;   

    arrTable=PPP(arr); 
    AllScore+=score;
    let o=Combos2(arrTable);
    for (let e=0;e<cube;e++){
        Graphics(arr[e]);
        elements[e].style.backgroundImage=`url(${img})`;
    }
    if(o[0]==0) {
        alert("eqp");
        AllScore=0;
        score=0;
        zonkCnt++;
    if(zonkCnt==3){
    zonkCnt=0;   
    AllScore=-1000;
    }
    Bank(1);
}
}
}
function Bank(x){
   
    bank+=AllScore+score;
    if(x==0){zonkCnt=0;
        let es = document.querySelector('.tt');
        es.textContent="Текущий счет "+ bank;
    }
    let el = document.querySelectorAll('.r')[numberOfRound];
    numberOfRound++;
    el.textContent=AllScore+score;
    cubesCnt=6;
    cube=6;
    score=0;
    AllScore=0;
    line=7;
    arr.length=0;
    arrInLine.length=0;
    isValid=true;
    let elements = document.querySelectorAll('.block');
    for(let y of elements){
        y.style.backgroundImage="";
    }  
    let elem = document.querySelectorAll('.dice');
    for(let z of elem){
        z.style.backgroundImage="";
    }  
    if(numberOfRound==10)
    winGame();
    }
function ComboCheck(art){
    let w=Combos2(art);
    if(w[0]==0 || w[1]!=0){
        isValid=false;
    }
    else isValid=true;
}
function PPP(arrNew){
    let a=0;
    let y=[];
    for(let i=0;i<7;i++){
        y[i]=0;

    }
    for(let e of arrNew){
        a++;
  for(let i=1;i<7;i++){    
      if(e==i){
          y[i]=y[i]+1;
      }     
  }
  } 
  y[0]=a;
  return y;
}

function Random(cnt) {
   for (let  i =0 ; i<cnt;i++)
    arr[i]= Math.floor(Math.random()*(5.9999)+1)
}
function IsPair(arrNew){
    let a=0;
    for(let e of arrNew)
    {
        if(e==2) a++;
    }
    return a;
}

function Combos (arrNew) {
    score = 0;
    if (cubesCnt==6 && arrNew[6] > 0 && arrNew[1] > 0 && arrNew[2] > 0 && arrNew[3] > 0 && arrNew[4] > 0 &&  arrNew[5] > 0)
    {
    score +=1000;
    cubesCnt=0;
    }
    if (cubesCnt==6 && IsPair(arrNew) == 3)
    {
        score+=750
        cubesCnt=0;
    }
    if (cubesCnt>=3 && arrNew[6] >= 3 || arrNew[1] >= 3 || arrNew[2] >= 3 || arrNew[3] >= 3 || arrNew[4] >= 3 ||  arrNew[5] >= 3)
    {
        for(let i=2;i<7;i++)
        {
            if(arrNew[i]>=3){
                score+=i*100+(arrNew[i]-3)*100*i;
                arrNew[i]=0;
                cubesCnt-=arrNew[i];
            }
        }
        if(arrNew[1]>=3){
            score+=1000+(arrNew[1]-3)*1000;
                arrNew[1]=0;
                cubesCnt-=arrNew[1];
        }
    }
    if(cubesCnt!=0 &&arrNew[5]>0){
        score+=arrNew[5]*50;
        arrNew[5]-=arrNew[5];
        cubesCnt-=arrNew[5];
       
    }
    if (cubesCnt!=0 && arrNew[1]>0){
        score+=100*arrNew[1];        
        cubesCnt=cubesCnt-arrNew[1];
        arrNew[1]-=arrNew[1];
    }  
}
function Combos2 (arrNew) {
    let score1 = 0;
    if (arrNew[0]==6 && arrNew[6] > 0 && arrNew[1] > 0 && arrNew[2] > 0 && arrNew[3] > 0 && arrNew[4] > 0 &&  arrNew[5] > 0)
    {
     arrNew[0]-=6;
     score1 +=1000;
    }
    if (arrNew[0]==6 && IsPair(arrNew) == 3)
    {
        score1+=750;
        arrNew[0]-=6;
    }
    if (arrNew[0]>=3 && arrNew[6] >= 3 || arrNew[1] >= 3 || arrNew[2] >= 3 || arrNew[3] >= 3 || arrNew[4] >= 3 ||  arrNew[5] >= 3)
    {
        for(let i=2;i<7;i++)
        {
            if(arrNew[i]>=3){
                score1+=i*100+(arrNew[i]-3)*100*i;
                arrNew[0]-=arrNew[i];
            }
        }
        if(arrNew[1]>=3){
            score1+=1000+(arrNew[1]-3)*1000;
                arrNew[0]-=arrNew[1];
        }
    }
    if(arrNew[0]>0 &&arrNew[5]>0){
        score1+=arrNew[5]*50;
        arrNew[0]-=arrNew[5];
       
    }
    if (arrNew[0]>0 && arrNew[1]>0)
    {
        score1+=100*arrNew[1];
        arrNew[0]-=arrNew[1];
    }  
    let w=[];
    w.push(score1);
    w.push(arrNew[0]);
    return w;
}
function clickD(x){
    score=0;
    let elements = document.querySelectorAll('.dice');
    let w=Graphics2(elements[x].style.backgroundImage);
    arrInLine.push(w);
    let elem = document.querySelectorAll('.line');
    let element = elem[line-1].querySelectorAll('.block');
    for(let e of element ){   
        if(e.style.backgroundImage=="") 
        {   
            e.style.backgroundImage=elements[x].style.backgroundImage;
            break; 
        }       
    }

    elements[x].style.backgroundImage="";
    let sc = elem[line-1].querySelector('.score');
    arrInLineAfter=PPP(arrInLine);
    let z=arrInLineAfter;
    ComboCheck(z);  
    cubesCnt=arrInLine.length;
    Combos(arrInLineAfter);
    document.getElementsByClassName("score")[0].textContent=AllScore+score;}

    function removeElement(x){
        let y=document.getElementsByClassName("line")[line-1];
        let y2=y.getElementsByClassName("block")[x];
        let u=Graphics2(y2.style.backgroundImage);
        let i=0;
        while(arrInLine[i]!=u)
        {
            i++;
        }
        
        arrInLine.splice(i,1);
        let elements = document.querySelectorAll('.dice');
        i=0;
        while(elements[i].style.backgroundImage!=""){
            i++;
        }
        elements[i].style.backgroundImage=y2.style.backgroundImage;
        y2.style.backgroundImage="";
        arrInLineAfter=PPP(arrInLine);
        let z=arrInLineAfter;
        ComboCheck(z);  
        cubesCnt=arrInLine.length;
        Combos(arrInLineAfter);
        document.getElementsByClassName("score")[0].textContent=AllScore+score;

    }
