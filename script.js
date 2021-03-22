var wrapper =  document.body.querySelector(".wrapper");

var dragonDamage = 0;
var dragonEle = document.createElement("div");
dragonEle.innerHTML = "Dragon Damage: " + dragonDamage


var winEle = document.createElement("div");

function dragonAttack(damage, attackType){
  if (attackType == "fire"){
    dragonDamage = dragonDamage + (damage - 1);
  }
  if (attackType == "ice"){
    dragonDamage = dragonDamage + (damage + 1);
  }
  if (attackType == "poison"){
    dragonDamage = dragonDamage + damage
  }
  
  dragonEle.innerHTML = "Dragon Damage: " + dragonDamage

  if (dragonDamage >=10){
    winEle.innerHTML = "You win!"
   
  }
}

document.body.querySelector(".firebutton").addEventListener("click", function(){
  dragonAttack(3, "fire")
}); 
document.body.querySelector(".icebutton").addEventListener("click", function(){
  dragonAttack(1, "ice")
}); 
document.body.querySelector(".poisonbutton").addEventListener("click", function(){
  dragonAttack(4, "poison")
});

document.body.appendChild(dragonEle);
document.body.appendChild(winEle);