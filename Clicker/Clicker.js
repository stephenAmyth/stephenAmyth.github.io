
var eggs= 0;
var eggButton = document.getElementById("eggButton");
var eggDisplay = document.getElementById("eggDisplay");
eggButton.onclick = function(){
  eggs = eggs + 1;
  eggDisplay.innerHTML = eggs + "eggs(s)";
}

var money= 0;
var moneyButton = document.getElementById("moneyButton");
var moneyDisplay = document.getElementById("moneyDisplay");
moneyButton.onclick = function(){
  money = money + 999458674563;
  moneyDisplay.innerHTML = money + "money(s)";
}

var gold= 0;
var goldButton = document.getElementById("goldButton");
var goldDisplay = document.getElementById("goldDisplay");
goldButton.onclick = function(){
  gold = gold + 1;
  goldDisplay.innerHTML = gold + " gold(s)";
}
var silver= 0;
var silverButton = document.getElementById("silverButton");
var silverDisplay = document.getElementById("silverDisplay");
silverButton.onclick = function(){
  if(money>= 10){
    money-= 10;
    silver++;
    moneyDisplay.innerHTML = Math.round(money) + " money";
    silverDisplay.innerHTML = Math.round(silver) + " silver";

  }
}
