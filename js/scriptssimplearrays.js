//Business or back-end logic:
const carList = ["RedDodgeViper","RevJensMini","Peerless1911Roadster","RedVolkswagenBeetle","YellowCadillac",
"YellowFordFocus","QuarryTruck","HighMountEngine"];
const viewList = ["right","top","front","back","left"];

//Front end logic
$(document).ready(function() {

  //Functions to next through right views of the cars.
  let count1 = -1;
  let count2 = -1;
  let car1
  let car2
  
  $("button#next1").click(function() {
    debugger
    if (count1>-1 && count1<carList.length)  {
      for (let i = 0; i<5; i++) {
        $("div.car1"+viewList[i]).removeClass(car1+viewList[i]);
      }
    }
    
    count1+=1;
    
    if (count1<carList.length) {
      car1 = carList[(count1)];
      $("div.car1right").addClass(car1+"right");
    }
    if (count1===carList.length) {
      count1 = -1
    }    
  });

  $("button#next2").click(function() { 
    debugger
    if (count2>-1 && count2<carList.length)  {
      for (let i = 0; i<5; i++) {
        $("div.car2"+viewList[i]).removeClass(car2+viewList[i]);
      }
    }
    
    count2+=1;
    
    if (count2<carList.length) {
      car2 = carList[(count2)];
      $("div.car2right").addClass(car2+"right");
    }
    if (count2===carList.length) {
      count2 = -1
    }    
  });

//Functions to view and select cars

  $("button#view1").click(function() {
    for (let i = 1; i<5; i++) {
      $("div.car1"+viewList[i]).addClass(car1+viewList[i]);
    }
  });   
  $("button#clearview1").click(function() {
    for (let i = 1; i<5; i++) {
      $("div.car1"+viewList[i]).removeClass(car1+viewList[i]);
    }   
  }); 
  
  let car1selected = 0
  let car2selected = 0
  $("button#select1").click(function() {
    car1selected=car1;
    if (car1selected===car2selected) {
      alert("I'm sorry, you can't choose the same car as player 2");
      car1selected=0
    }
    else {
      alert(car1+" selected");
      car1selected = car1
      localStorage.transfer1 = car1;
    }; 
  }); 

  $("button#view2").click(function() {
    for (let i = 1; i<5; i++) {
      $("div.car2"+viewList[i]).addClass(car2+viewList[i]);
    }
  });   
  $("button#clearview2").click(function() {
    for (let i = 1; i<5; i++) {
      $("div.car2"+viewList[i]).removeClass(car2+viewList[i]);
    }       
  }); 

  $("button#select2").click(function() {
    car2selected=car2;
    if (car1selected===car2selected) {
      alert("I'm sorry, you can't choose the same car as player 1");
      car2selected=0
    }
    else {
      alert(car2+" selected");
      car2selected = car2
      localStorage.transfer2 = car2;
    }; 
  }); 

  $("button#red1").click(function() {
    alert("Your choice of racecar has been reset");
      car1selected=0
  }); 

  $("button#red2").click(function() {
    alert("Your choice of racecar has been reset");
      car2selected=0
  }); 
});
