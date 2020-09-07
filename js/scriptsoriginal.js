//Business or back-end logic:
$(document).ready(function() {


  //Functions to next through left views of the cars.
  count1 = 0;
  count2 = 0;
  count3 = 0;
  car1selected = 0
  car2selected = 0
    

  $("button#next1").click(function() {
    $(count1+=1);
      if (count1===1) {
        car1 = "RedDodgeViper"};

      
      if (count1>1)  {
        $("div.car1right").removeClass(car1+"right");
        $("div.car1top").removeClass(car1+"top");
        $("div.car1front").removeClass(car1+"front");
        $("div.car1back").removeClass(car1+"back");
        $("div.car1left").removeClass(car1+"left");  
      };
      if (count1===2) {
        car1 = "RevJensMini"
      };
      if (count1===3) {
        car1 = "Peerless1911Roadster"
      };
      if (count1===4) {
        car1 = "RedVolkswagenBeetle"
      };
      if (count1===5) {
        car1 = "YellowCadillac"
      };
      if (count1===6) {
        car1 = "YellowFordFocus"
      };
      if (count1===7) {
        car1 = "QuarryTruck"
      };
      if (count1===8) {
        car1 = "HighMountEngine"
      };
      
      $("div.car1right").addClass(car1+"right");
      
      if (count1===9) {
        $("div.car1right").removeClass(car1+"right");
        count1=0
      };      
  });

  $("button#next2").click(function() {
    $(count2+=1);
    if (count2===1) {
      car2 = "RedDodgeViper"
    };
    if (count2>=2)  {
      $("div.car2right").removeClass(car2+"right");
      $("div.car2top").removeClass(car2+"top");
      $("div.car2front").removeClass(car2+"front");
      $("div.car2back").removeClass(car2+"back");
      $("div.car2left").removeClass(car2+"left");  
    };
    if (count2===2) {
      car2 = "RevJensMini"
    };
    if (count2===3) {
      car2 = "Peerless1911Roadster"
    };
    if (count2===4) {
      car2 = "RedVolkswagenBeetle"
    };
    if (count2===5) {
      car2 = "YellowCadillac"
    };
    if (count2===6) {
      car2 = "YellowFordFocus"
    };
    if (count2===7) {
      car2 = "QuarryTruck"
    };
    if (count2===8) {
      car2 = "HighMountEngine" 
    };
    $("div.car2right").addClass(car2+"right");
    if (count2===9) {
      count2=0
      $("div.car2right").removeClass(car2+"right");
    };
  });
  
//Functions to view and select cars

  $("button#view1").click(function() {
    $("div.car1top").addClass(car1+"top");    
    $("div.car1front").addClass(car1+"front");    
    $("div.car1back").addClass(car1+"back");      
    $("div.car1left").addClass(car1+"left");    
  });   
  $("button#clearview1").click(function() {
      $("div.car1top").removeClass(car1+"top");
      $("div.car1front").removeClass(car1+"front");
      $("div.car1back").removeClass(car1+"back");
      $("div.car1left").removeClass(car1+"left");     
  }); 
  
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
    $("div.car2top").addClass(car2+"top");    
    $("div.car2front").addClass(car2+"front");    
    $("div.car2back").addClass(car2+"back");      
    $("div.car2left").addClass(car2+"left");    
  });   
  $("button#clearview2").click(function() {
      $("div.car2top").removeClass(car2+"top");
      $("div.car2front").removeClass(car2+"front");
      $("div.car2back").removeClass(car2+"back");
      $("div.car2left").removeClass(car2+"left");     
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

 
//RACETRACK PAGE


/*Turn cards.  The original project was carried out before learning about arrays and loops, which made representing flipping through a stack of cards
tricky. As an approximation of that a random number is created that equals a class. There are 3 of each type of card, 9 types of card plus 5 racecar
cards. So the random number is multiplied by 32 and the integer value taken to create 32 classes (0 is the first random number). Statistically this is
rubbish, after 15 cards the chance of getting the red racecar is one in 16, eventually with only one card left, if the red racecar hasn't been played 
yet the chance is 1 in 1.

After learning about arrays this refactored version includes an array basis for the cards.  A future project could also distribute the icons around the track randomly*/

$("#red3").click(function() {  /* This places the car on the start line. Probably should redo and not use bootstrap so it responds with grid*/
  alert("car1 is "+x+" car2 is "+y);
  $("div.s17Arotate").addClass(x+"top");
  document.getElementById("s17A").style.zIndex = "15";
  $("div.s17Crotate").addClass(y+"top");
  document.getElementById("s17C").style.zIndex = "5";
}); 

// This is the stack of cards function
var cardStack = []
const stackBuilder = function(x,y) {
  let i
  let j
  let iconStack=[]
  let racecarStack=[]
    for (let i=0; i<x; i+=1) {
    iconStack.push("RedHelmet","BlueHelmet","YellowHelmet","RedFlag","GreenFlag","YellowFlag","RedTyre","BlueTyre","GreenTyre")
  }
  for (let j=0; j<y; j+=1) {
    racecarStack.push("RedRacecar","BlueRacecar","GreenRacecar","PurpleRacecar","YellowRacecar")
  }
  cardStack= iconStack.concat(racecarStack); 
  return cardStack 
};

stackBuilder(3,1);

var unplayedCards = cardStack
const nextCard = function(array) {
  let x = Math.round((Math.random()*(array.length-1)))
  let y = array[x]
  array.splice(x,1);
  array.push(y)
  return array
};

//This is the main function, what happens when you click the stack
let card = 0
let uncard=0
let t = 0
let previous = 0
let turn = 0  

$("#stack").click(function() {
  t=1-t  //determines whose turn it is
  if (t===1) {turn=1}
  else {turn =2}
  
  $("div.back-stand-in").removeClass(previous);  //Removes the card that stands in while the card is being flipped back to home position
  previous=uncard

  if (uncard!=0) {
    $("div.back-stand-in").addClass(uncard);  //puts previous card icon on the stand-in card
    $("div.flip-card-back").removeClass(uncard); //removes the prevous card icon
     $("div.flip-card-inner").removeClass("flip-card");//flips the card back to the home position
  }
                     
  unplayedCards = nextCard(unplayedCards)   //Chooses an icon and puts it on the card.
  card = unplayedCards.pop() 
  $("div.flip-card-back").addClass(card);
  uncard=card;

  
  alert("Are you ready?");/*for some reason it won't do a second flip
                          without this break here. Event bubbling? */
  $("div.flip-card-inner").addClass("flip-card");  //card is flipped
 
  if (unplayedCards.length<=0) { //replaces stack of cards when it is finished
    stackBuilder(3,1)
    unplayedCards=cardStack.slice(0); 
  }  
});

  










/*$("#stack").click(function() {
  t=1-t  //determines whose turn it is
  if (t===1) {turn=1}
  else {turn =2}
  
  count4 +=1;
  if (count4 >2) {
      $("div.back-stand-in").removeClass(previous);  //Removes the card that stands in while the card is being flipped back to home position
  }
  if (uncard!=0) {
    $("div.back-stand-in").addClass(uncard);  //puts previous card icon on the stand-in card
    $("div.flip-card-back").removeClass(uncard); //removes the prevous card icon
    $("div.flip-card-inner").removeClass("flip-card");//flips the card back to the home position
  }
                             //Chooses an icon and puts it on the card.
  previous=uncard  
  icon = ((Math.random())*32)  //don't forget to put this back to 32
  card=Math.round(icon) 
  
  if (card<=3) {
    $("div.flip-card-back").addClass("RedHelmet");
    uncard="RedHelmet";
  }
  if (card>3 && card<=6) {
    $("div.flip-card-back").addClass("BlueHelmet");
    uncard="BlueHelmet"  
  }
  if (card>6&&card<=9) {
    $("div.flip-card-back").addClass("YellowHelmet");  
    uncard="YellowHelmet"
  }
  if (card>9&&card<=12) {
    $("div.flip-card-back").addClass("RedFlag"); 
    uncard="RedFlag" 
  }
  if (card>12&&card<=15) {
    $("div.flip-card-back").addClass("GreenFlag"); 
    uncard="GreenFlag" 
  }
  if (card>15&&card<=18) {
    $("div.flip-card-back").addClass("YellowFlag");
    uncard="YellowFlag"  
  }
  if (card>18&&card<=21) {
    $("div.flip-card-back").addClass("RedTyre");
    uncard="RedTyre"  
  }
  if (card>21&&card<=24) {
    $("div.flip-card-back").addClass("BlueTyre");  
    uncard="BlueTyre"
  }
  if (card>24&&card<=27) {
    $("div.flip-card-back").addClass("GreenTyre");
    uncard="GreenTyre"  
  }
  if (card===28) {
    $("div.flip-card-back").addClass("RedRacecar"); 
    uncard="RedRacecar" 
  }
  if (card===29) {
    $("div.flip-card-back").addClass("BlueRacecar");
    uncard="BlueRacecar"  
  }
  if (card===30) {
    $("div.flip-card-back").addClass("GreenRacecar");
    uncard="GreenRacecar"  
  }
  if (card===31) {
    $("div.flip-card-back").addClass("PurpleRacecar");
    uncard="PurpleRacecar"  
  }
  if (card===32) {
    $("div.flip-card-back").addClass("YellowRacecar");
    uncard="YellowRacecar"  
  }
 
  alert("Are you ready?");/*for some reason it won't do a second flip
                          without this break here. Event bubbling? 
  $("div.flip-card-inner").addClass("flip-card");  //card is flipped
  
});
*/


/*  GAME FUNCTIONALITY  

Inputs - 
    cars selected = car1selected  car2selected
    card turned = uncard
    track square selected - location and space */

    var x = localStorage.getItem("transfer1"); //brings car choices across from selector page
    var y = localStorage.getItem("transfer2");

    car1space = 0
    car2space = 0

    car1oldlocation = "s17A" //Tells function how to remove cars from start line
    car2oldlocation = "s17C"   
   

  function checkspace(locate) {    //Big function that moves cars.  Probably should be broken out into sub functions
        
    if (position != uncard) {
      alert("no that's "+position+" not "+uncard);  // Something about stop or go to end of function
    }
    else if (turn===1) {
      if ((space-car1space)>11) {
        alert("Did you miss a "+uncard+" before that?");
      }
      //else {
               
        if (space===(car2space-1)||space===car2space||space===(car2space+1)) {
          $("."+car2oldlocation+"rotate").removeClass(y+"top"); //This removes picture of car2
          document.getElementById(car2oldlocation).style.zIndex = "-1";  // puts div to the back
          car2oldlocation = car2oldlocation.substring(0,car2oldlocation.length -1)+"C";  //changes the loction of car 2 to C  (irrespective of the length of the string)
          document.getElementById(car2oldlocation).style.zIndex = "5"; //brings div to the front  
          $("#"+car2oldlocation).addClass(y+"top");  //adds picture of car 2
          locate = locate.substring(0,locate.length -1)+"A";//This sets up car 1 to go to A
          }

        var car1oldlocmadeA=car1oldlocation.substring(0,car1oldlocation.length -1)+"A"  //When two cars have been on the same square, car1oldlocation can
        $("."+car1oldlocmadeA+"rotate").removeClass(x+"top");                         // sometimes be set to B, even though the code above would seem to 
        //alert("car 1 A has been removed "+"."+car1oldlocmadeA+"rotate");            //set it to A. This is a hack that removes the image from
                                                                                      // A every time, whether it is needed or not.  To fix in future. 
                                                                                      // Equivalent hack is also done on turn 2
   
        $("."+car1oldlocation+"rotate").removeClass(x+"top");
        document.getElementById(car1oldlocation).style.zIndex = "-1";  //This puts car 1 in the right place
        document.getElementById(locate).style.zIndex = "5";  
        $("#"+locate).addClass(x+"top");
        
        car1oldlocation = locate //This sets up the information for the next turn
        car1space = space
        //turn=0  Make this active to prevent a player making multiple moves per turn
      //}
      
    }    
    else if (turn===2) {
      if ((space-car2space)>11) {
        alert("Did you miss a "+uncard+" before that?");
      }
      //else {
        if (space===(car1space-1)||space===car1space||space===(car1space+1)) {
          document.getElementById(car1oldlocation).style.zIndex = "-1";  
          $("#"+car1oldlocation).removeClass(x+"top"); //removes car1 from B
          car1oldlocation = car1oldlocation.substring(0,car1oldlocation.length -1)+"A"; //Changes car1 location to A
          document.getElementById(car1oldlocation).style.zIndex = "5";  //brings car1's div to the top
          $("#"+car1oldlocation).addClass(x+"top"); //adds the picture of car1
          locate = locate.substring(0,locate.length -1)+"C" //This sets up car 2 to go to C
        }

        var car2oldlocmadeC=car2oldlocation.substring(0,car2oldlocation.length -1)+"C"  //This is the car2 version of the hack described above
        $("."+car2oldlocmadeC+"rotate").removeClass(y+"top");
        //alert("car 2 C has been removed");  

        $("#"+car2oldlocation).removeClass(y+"top");
        document.getElementById(car2oldlocation).style.zIndex = "-1";  //This puts car 2 in the right place
        document.getElementById(locate).style.zIndex = "5";  
        $("#"+locate).addClass(y+"top");
       
        car2oldlocation = locate //This sets up the information for the next turn
        car2space = space
        //turn=0   Make this active to prevent a player making multiple moves per turn
      //}
     
    }
  };
    
















    // Turn starts by clicking pile of cards.  Then click the appropriate icon. This kicks off the big move car function above

    $("#r18").click(function() {  
      position = "RedHelmet";
      space = 1
      if (turn===1) {
        checkspace("r18A");
      }
      if (turn===2) {
        checkspace("r18C");
      }
            
    });

    $("#q18").click(function() {  
      position = "BlueTyre";
      space = 2
      checkspace("q18B"); 
    });

    $("#p18").click(function() {  
      position = "YellowHelmet";
      space = 3
      checkspace("p18B"); 
    });

    $("#o18").click(function() {  
      position = "GreenFlag";
      space = 4
      checkspace("o18B"); 
    });

    $("#m18").click(function() {  
      position = "RedTyre";
      space = 6
      checkspace("m18B"); 
    });

    $("#l18").click(function() {  
      position = "YellowFlag";
      space = 7
      checkspace("l18B"); 
    });

    $("#k18").click(function() {  
      position = "BlueHelmet";
      space = 8
      checkspace("k18B"); 
    });

    $("#j18").click(function() {  
      position = "RedFlag";
      space = 9
      checkspace("j18B"); 
    });

    $("#i19").click(function() {  
      position = "GreenTyre";
      space = 10
      checkspace("i19B"); 
    });

    $("#h19").click(function() {  
      position = "RedHelmet";
      space = 11
      checkspace("h19B"); 
    });

    $("#g19").click(function() {  
      position = "BlueTyre";
      space = 12
      checkspace("g19B"); 
    });

    $("#f19").click(function() {  
      position = "RedRacecar";
      space = 13
      checkspace("f19B"); 
    });

    $("#e19").click(function() {  
      position = "YellowHelmet";
      space = 14
      checkspace("e19B"); 
    });

    $("#d19").click(function() {  
      position = "GreenFlag";
      space = 15
      checkspace("d19B"); 
    });

    $("#c18").click(function() { 
      position = "RedTyre";
      space = 16
      checkspace("c18B"); 
    });

    $("#c17").click(function() {  
      position = "YellowFlag";
      space = 17
      checkspace("c17B"); 
    });

    $("#c16").click(function() {  
      position = "BlueHelmet";
      space = 18
      checkspace("c16B"); 
    });

    $("#c13").click(function() {  
      position = "RedFlag";
      space = 19
      checkspace("c13B"); 
    });

    $("#d12").click(function() {  
      position = "GreenTyre";
      space = 20
      checkspace("d12B"); 
    });

    $("#d11").click(function() {  
      position = "RedHelmet";
      space = 21
      checkspace("d11B"); 
    });

    $("#d10").click(function() {  
      position = "BlueTyre";
      space = 22
      checkspace("d10B"); 
    });

    $("#c9").click(function() {  
      position = "YellowHelmet";
      space = 23
      checkspace("c9B"); 
    });

    $("#c7").click(function() {  
      position = "GreenFlag";
      space = 24
      checkspace("c7B"); 
    });

    $("#c6").click(function() {  
      position = "BlueRacecar";
      space = 25
      checkspace("c6B"); 
    });
    
    $("#c5").click(function() {  
      position = "RedTyre";
      space = 27
      checkspace("c5B"); 
    });

    $("#c3").click(function() {  
      position = "YellowFlag";
      space = 28
      checkspace("c3B"); 
    });

    $("#d3").click(function() {  
      position = "BlueHelmet";
      space = 29
      checkspace("d3B"); 
    });
   
    $("#e2").click(function() {  
      position = "RedFlag";
      space = 30
      checkspace("e2B"); 
    });

    $("#f2").click(function() {  
      position = "GreenTyre";
      space = 31
      checkspace("f2B"); 
    });

    $("#g3").click(function() {  
      position = "RedHelmet";
      space = 32  //this isn't working - it thinks its too far if its on the previous red helmet
      checkspace("j4B"); 
    });

    $("#g4").click(function() {  
      position = "BlueTyre";
      space = 33
      checkspace("g4B"); 
    });
    
    $("#h5").click(function() {  
      position = "YellowHelmet";
      space = 34
      checkspace("h5B"); 
    });

    $("#h6").click(function() {  
      position = "GreenFlag";
      space = 35
      checkspace("h6B"); 
    });

    $("#g8").click(function() {  
      position = "RedTyre";
      space = 36
      checkspace("g8B"); 
    });

    $("#g9").click(function() {  
      position = "YellowFlag";
      space = 37
      checkspace("g9B"); 
    });

    $("#f10").click(function() {  
      position = "GreenRacecar";
      space = 38
      checkspace("f10B"); 
    });

    $("#f11").click(function() {  
      position = "BlueHelmet";
      space = 39
      checkspace("f11B"); 
    });
    
    $("#g12").click(function() {  
      position = "RedFlag";
      space = 40
      checkspace("g12B"); 
    });

    $("#g14").click(function() {  
      position = "GreenTyre";
      space = 41
      checkspace("c14B"); 
    });

    $("#h14").click(function() {  
      position = "RedHelmet";
      space = 42
      checkspace("h14B"); 
    });
    
    $("#i13").click(function() {  
      position = "BlueTyre";
      space = 43
      checkspace("i13B"); 
    });

    $("#j12").click(function() {  
      position = "YellowHelmet";
      space = 44
      checkspace("j12B"); 
    });

    $("#j10").click(function() {  
      position = "GreenFlag";
      space = 45
      checkspace("j10B"); 
    });

    $("#j9").click(function() {  
      position = "RedTyre";
      space = 46
      checkspace("j9B"); 
    });

    $("#j8").click(function() {  
      position = "YellowFlag";
      space = 47
      checkspace("j8B"); 
    });

    $("#j6").click(function() {  
      position = "BlueHelmet";
      space = 48
      checkspace("j6B"); 
    });

    $("#j5").click(function() {  
      position = "RedFlag";
      space = 49
      checkspace("j5B"); 
    });

    $("#k3").click(function() {  
      position = "GreenTyre";
      space = 50
      checkspace("k3B"); 
    });

    $("#l2").click(function() {  
      position = "RedHelmet";
      space = 51
      checkspace("l2B"); 
    });

    $("#m2").click(function() {  
      position = "PurpleRacecar";
      space = 52
      checkspace("m2B"); 
    });

    $("#n2").click(function() {  
      position = "BlueTyre";
      space = 53
      checkspace("n2B"); 
    });

    $("#o2").click(function() {  
      position = "YellowHelmet";
      space = 54
      checkspace("o2B"); 
    });

    $("#p2").click(function() {  
      position = "GreenFlag";
      space = 55
      checkspace("p2B"); 
    });

    $("#q2").click(function() {  
      position = "RedTyre";
      space = 56
      checkspace("q2B"); 
    });
    
    $("#q3").click(function() {  
      position = "YellowFlag";
      space = 57
      checkspace("q3B"); 
    });
    
    $("#r3").click(function() {  
      position = "BlueHelmet";
      space = 58
      checkspace("r3B"); 
    });

    $("#s4").click(function() {  
      position = "RedFlag";
      space = 59
      checkspace("s4B"); 
    });
    
    $("#s5").click(function() {  
      position = "GreenTyre";
      space = 60
      checkspace("s5B"); 
    });
     
    $("#r6").click(function() {  
      position = "RedHelmet";
      space = 61
      checkspace("r11B"); 
    });

    $("#q7").click(function() {  
      position = "YellowRacecar";
      space = 62
      checkspace("q7B"); 
    });

    $("#q8").click(function() {  
      position = "BlueTyre";
      space = 62
      checkspace("q8B"); 
    });


    $("#p8").click(function() {  
      position = "YellowHelmet";
      space = 63
      checkspace("p8B"); 
    });

    $("#o8").click(function() {  
      position = "GreenFlag";
      space = 64
      checkspace("o8B"); 
    });

    $("#n8").click(function() {  
      position = "RedTyre";
      space = 65
      checkspace("n8B"); 
    });

    $("#m8").click(function() {  
      position = "YellowFlag";
      space = 66
      checkspace("m8B"); 
    });

    $("#l9").click(function() {  
      position = "BlueHelmet";
      space = 68
      checkspace("l9B"); 
    });

    $("#l10").click(function() {  
      position = "RedFlag";
      space = 69
      checkspace("l10B"); 
    });

    $("#l11").click(function() {  
      position = "GreenTyre";
      space = 70
      checkspace("l11B"); 
    });

    $("#l12").click(function() {  
      position = "RedHelmet";
      space = 71
      checkspace("l12B"); 
    });

    $("#m12").click(function() {  
      position = "BlueTyre";
      space = 72
      checkspace("m12B"); 
    });

    $("#n12").click(function() {  
      position = "YellowHelmet";
      space = 73
      checkspace("n18B"); 
    });

    $("#o11").click(function() {  
      position = "GreenFlag";
      space = 74
      checkspace("o11B"); 
    });

    $("#p11").click(function() {  
      position = "RedTyre";
      space = 75
      checkspace("p11B"); 
    });

    $("#q11").click(function() {  
      position = "YellowFlag";
      space = 76
      checkspace("q11B"); 
    });

    $("#s12").click(function() {  
      position = "BlueHelmet";
      space = 77
      checkspace("s12B"); 
    });

    $("#s13").click(function() {  
      position = "RedFlag";
      space = 78
      checkspace("s13B"); 
    });

    $("#s14").click(function() {  
      position = "GreenTyre";
      space = 79
      checkspace("s14B"); 
    });
    
});//end of document 



/* This functionality was originally built to toggle through viewing the cars on Car Selector
   page.  
   But this was hard to synchronise with later functions built using add and remove classes
   so was replaced. Kept it here to demonstrate capacity to use toggle, and in case I needed
  it somewhere else

    

  $("button#next1").click(function() {
    $(count1+=1);
      if (count1===1) {
        $(".Red_Dodge_Viper1-showing").toggle();
        car1 = "RedDodgeViper"
      }
      else if (count1===2) {
        $(".Red_Dodge_Viper1-showing").toggle();
        $(".Red_Dodge_Viper1-hidden").toggle();
        $(".Bigwheelcorvette1-showing").toggle();
        car1 = "Bigwheelcorvette"
      }
      else if (count1===3){
        $(".Bigwheelcorvette1-showing").toggle();  
        $(".Bigwheelcorvette1-hidden").toggle();
        $(".Red_helmet1-showing").toggle();
      }
      else if (count1===4){
        $(".Red_helmet1-showing").toggle();  
        $(".Red_helmet1-hidden").toggle();
        $(".Purple_racecar1-showing").toggle();
      }
      else if (count1===5){
        $(".Purple_racecar1-showing").toggle();  
        $(".Purple_racecar1-hidden").toggle();
        count1=0;
      }
  });

  $("button#next2").click(function() {
    $(count2+=1);
      if (count2===1) {
        $(".Red_Dodge_Viper2-showing").toggle();
        car2 = "RedDodgeViper"
      }
      else if (count2===2) {
        $(".Red_Dodge_Viper2-showing").toggle();
        $(".Red_Dodge_Viper2-hidden").toggle();
        $(".Bigwheelcorvette2-showing").toggle();
        car2 = "Bigwheelcorvette"
      }
      else if (count2===3){
        $(".Bigwheelcorvette2-showing").toggle();  
        $(".Bigwheelcorvette2-hidden").toggle();
        $(".Red_helmet2-showing").toggle();
      }
      else if (count2===4){
        $(".Red_helmet2-showing").toggle();  
        $(".Red_helmet2-hidden").toggle();
        $(".Purple_racecar2-showing").toggle();
      }
      else if (count2===5){
        $(".Purple_racecar2-showing").toggle();  
        $(".Purple_racecar2-hidden").toggle();
        count2=0;
      }
  });*/