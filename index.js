
var randomNumber1 = Math.floor(Math.random() * 5) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomImage1;

var x = document.querySelectorAll("img")[0];    /* For Player 1 dice Image*/
x.setAttribute("src", randomImageSource1);      

/*----------------------------------------------------------------------------------------------------------------*/

var randomNumber2 = Math.floor(Math.random() * 5) + 1;

var randomImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomImage2;

var y =  document.querySelectorAll("img")[1];   /* For Player 2 dice Image*/
y.setAttribute("src", randomImageSource2);

/*----------------------------------------------------------------------------------------------------------------*/

if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = '<p class = "write"> <img class="flag" src="images/flag.png">  Player 1 Wins!</p>';
}else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = '<p class = "write">Player 2 Wins!  <img class="flag" src = "images/flag.png"></p>';
}else{
        document.querySelector("h1").innerHTML = "Draw";
}    