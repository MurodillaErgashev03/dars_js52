const elYellow = document.querySelector(".div-yellow");
const elRed = document.querySelector(".div-red");
const elInput = document.querySelector("#age");
const elBtn = document.querySelector("#btn");
const elForm = document.querySelector(".form");



elForm.addEventListener("submit", function (ab)  {
  ab.preventDefault();
  let num = elInput.value;
  

  if( num > 10 ){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
  

 
});






console.log(elInput);



