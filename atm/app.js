let pin = 4040;
let balance = 500000;

let button1 =document.getElementById("btn");
const atmtn = document.getElementById("atm-button");
let pininput = document.getElementById("password");
let pininput2 = document.getElementById("current-pass");
let pininput3 = document.getElementById("current-new-pass");
let error = document.getElementById("error");
let checkBalance = document.getElementById("check-balance");
let changePin = document.getElementById("change-pin");
let deposit = document.getElementById("deposit-money");
let withdraw = document.getElementById("withdraw-money");
let cbalance=document.getElementById("amount");
let enter = document.getElementById("enter")
let changepin1 = document.getElementById("changepin")
let hide=document.querySelector('.results').style.display= "none";

function main (){
  window.location.href = "pin.html";

}
button1.addEventListener('click',main)

function varifypin(){
  const enterpin = parseInt(password.value)
  if(enterpin === pin){
    services();

  }else{
   error.innerHTML = "enter a vaild pin!";
  }
}
atmtn.addEventListener("click" , varifypin);

function services(){
  window.location.href = "sarvices.html";
}
function checkbalance(){
  cbalance.innerHTML=("₹ "+balance);
 let  show =document.querySelector('.results').style.display= "flex";
 let  hid =document.querySelector('.change').style.display= "none";

}
function changepin (){
 
  let display = document.querySelector('.change').style.display ="flex"
  let hidden = document.querySelector('.results').style.display = "none"

}

let enterpin2 = parseInt(pass.value);
let enterpin3 = parseInt(newpass.value);
function enterbtn (){

  if(enterpin2 ===pin && enterpin3>0){
    pin=enterpin3;
    alert("changed");
  }else{
    alert("not changed");
  }
   
}

enter.addEventListener('click',enterbtn)



