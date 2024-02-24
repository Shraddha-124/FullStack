let dishes = document.getElementById("dishes");
let foods = document.getElementById("foods");
let orders = document.getElementById("orders");
let track = document.getElementById("track");
let logIn = document.getElementById("log");
let logPage = document.getElementById("logPage");
let logedBtn = document.getElementById("logedBtn");

dishes.addEventListener("click", function () {
  dishes.style.color = "red";
  foods.style.color = "white";
  orders.style.color = "white";
});

foods.addEventListener("click", function () {
  dishes.style.color = "white";
  foods.style.color = "red";
  orders.style.color = "white";
});

orders.addEventListener("click", function () {
  dishes.style.color = "white";
  foods.style.color = "white";
  orders.style.color = "red";
});

track.addEventListener("click", function () {
  document.getElementById("food").style.display = "none";
  document.getElementById("order").style.display = "none";
  document.getElementById("dishe").style.display = "none";
  document.getElementById("food2").style.display = "none";
  document.querySelector(".main").style.display = "none";
  document.querySelector(".imgs").style.display = "flex";
});

let logBtn = document.getElementById("logBtn");

logBtn.addEventListener("click", function(){
   document.querySelector(".loginPage").style.display="block";
})

let loged = document.getElementById("logedBtn");

loged.addEventListener("click", function(){

   let email = document.getElementById("name");
   let pass = document.getElementById("pass");

   if(email.value == "" || pass.value == ""){
       alert("Please Enter Email Password")
   }else{
       alert("You Loged In");
       document.querySelector(".loginPage").style.display="none";

   }

})