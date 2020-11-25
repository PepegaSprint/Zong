let arr=new Array();
let arrInLine=[];
let arrTable=[];
let AllScore;
let cubesCnt=6;
let score;
let zonkCnt=0;
let bank=0;
function start(cubesCnt){
    Random(cubesCnt);
    arrTable=PPP(arr);  
    if(Combos(arrTable)==0) {
        alert('Zonk');
        AllScore=0;
        zonkCnt++;
    if(zonkCnt==3){
    bank-=1000;
    zonkCnt=0;
    }
}
else{zonkCnt=0}
}
function ComboCheck(){
    arrInLine=PPP(arr);
    if(Combos()==0){
        alert('invalid');
    }
    AllScore=score;
}
function PPP(arrNew){
    let a=0;
    for(let e of arr){
  for(let i=1;i<7;i++){
      a++;
      if(e==i){
          arrNew[i]=arrNew+1;
      }     
  }
  arr[e]=0;
  } 
  arrNew[0]=a; 
  return arrNew;
}

function Random(cnt) {
   for (let  i =0 ; i<=cnt;i++)
    arr[i]= Math.floor(Math.random()*(5.9999)+1)
}
function IsPair(){
    let a=0;
    for(let e of arrNew)
    {
        if(e==2) a++;
    }
    return a;
}

function Combos (arrNew) {
    score = 0;
    if (arrNew[6] > 0 && arrNew[1] > 0 && arrNew[2] > 0 && arrNew[3] > 0 && arrNew[4] > 0 &&  arrNew[5] > 0)
    {
     arrNew[0]-=6;
    score +=1000;
    }
    if (IsPair() == 3)
    {
        score+=750
        arrNew[0]-=6;
    }
    if (arrNew[6] >= 3 || arrNew[1] >= 3 || arrNew[2] >= 3 || arrNew[3] >= 3 || arrNew[4] >= 3 ||  arrNew[5] >= 3)
    {
        for(let i=2;i<7;i++)
        {
            if(arrNew[i]>=3){
                score+=i*100+(arrNew[i]-3)*100*i;
                arrNew[0]-=arrNew[i];
                arrNew[i]=0;
            }
        }
        if(arrNew[1]>=3){
            score+=i*1000+(arrNew[1]-3)*1000*i;
                arrNew[0]-=arrNew[1];
                arrNew[1]=0;
        }
    }
    if(arrNew[5]>0){
        score+=arrNew[5]*50;
        arrNew[0]-=arrNew[5];
        arrNew[5]-=arrNew[5];
       
    }
    if (arrNew[1]>0)
    {
        arrNew[0]-=arrNew[1];
        arrNew[1]-=arrNew[1];
        score+=100*arrNew[1];
    }  
    return score;
}