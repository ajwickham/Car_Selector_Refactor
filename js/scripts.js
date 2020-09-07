//Business or back-end logic:
const carList = ["RedDodgeViper","RevJensMini","Peerless1911Roadster","RedVolkswagenBeetle","YellowCadillac",
"YellowFordFocus","QuarryTruck","HighMountEngine"];
const viewList = ["top","front","back","left","right"];

function Car(carName,numberofraces,numberofvictories) {
  this.carName = carName;
  this.numberofraces = numberofraces;
  this.numberofvictories = numberofvictories;
}

function Game() {
  this.cars = [];
}

let game = new Game();

Game.prototype.createCarList = function() {
  for (let i = 0; i<carList.length; i++) {
    let carEntry = new Car(carList[i],"","")
    this.cars.push(carEntry);
  }
}
game.createCarList();


//Front end logic
Game.prototype.removeCarClass = function(j,k,div,count) {
  for (let i = j; i<k; i++) {
    $(div+viewList[i]).removeClass(game.cars[count].carName+viewList[i]);
  }
}
Game.prototype.addCarClass = function(j,k,div,count) {
  for (let i = j; i<k; i++) {
    $(div+viewList[i]).addClass(game.cars[count].carName+viewList[i]);
  }  
}

$(document).ready(function() {

  //Functions to next through right views of the cars.
  let count1 = -1;
  let count2 = -1;
  
  $("button#next1").click(function() {
    if (count1>-1 && count1<carList.length)  {
      game.removeCarClass(0,5,"div.car1",count1);
    }
    
    count1 += 1;
    
    if (count1<carList.length) {
      game.addCarClass(4,5,"div.car1",count1);
    }
    if (count1===carList.length) {
      count1 = -1
    }    
  });

  $("button#next2").click(function() { 
    if (count2>-1 && count2<carList.length)  {
      game.removeCarClass(0,5,"div.car2",count2);
    }
    
    count2+=1;
    
    if (count2<carList.length) {
      game.addCarClass(4,5,"div.car2",count2);
    }
    if (count2===carList.length) {
      count2 = -1
    }    
  });

//Functions to view and select cars

  $("button#view1").click(function() {
    game.addCarClass(0,4,"div.car1",count1);
  });   
  $("button#clearview1").click(function() {
    game.removeCarClass(0,4,"div.car1",count1);  
  }); 
  
  let car1selected = 0
  let car2selected = 0
  $("button#select1").click(function() {
    car1selected=game.cars[count1].carName;
    if (car1selected===car2selected) {
      alert("I'm sorry, you can't choose the same car as player 2");
      car1selected=0
    }
    else {
      alert(car1selected+" selected");
      localStorage.transfer1 = car1selected;
    }; 
  }); 

  $("button#view2").click(function() {
    game.addCarClass(0,4,"div.car2",count2);
  });   
  $("button#clearview2").click(function() {
    game.removeCarClass(0,4,"div.car2",count2);       
  }); 

  $("button#select2").click(function() {
    car2selected=game.cars[count2].carName;
    if (car1selected===car2selected) {
      alert("I'm sorry, you can't choose the same car as player 1");
      car2selected=0
    }
    else {
      alert(car2selected+" selected");
      localStorage.transfer2 = car2selected;
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