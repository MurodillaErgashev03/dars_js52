const elYellow = document.querySelector(".div-yellow");
const elRed = document.querySelector(".div-red");
const elInput = document.querySelector("#age");
const elBtnZero = document.querySelector("#btn-id-0");
const elBtnFirst = document.querySelector("#btn-id-1");
const elBtnSecond = document.querySelector("#btn-id-2");
const elBtnThree = document.querySelector("#btn-id-3");
const elBtnFourth = document.querySelector("#btn-id-4");
const elBtnFifth = document.querySelector("#btn-id-5");
const elBtnSixth = document.querySelector("#btn-id-6");
const elBtnSeventh = document.querySelector("#btn-id-7");
const elBtnEighth = document.querySelector("#btn-id-8");
const elBtnNinth = document.querySelector("#btn-id-9");
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

elBtnZero.addEventListener("click", function ()  {
  elInput.value = 0;
  if( elInput.value = 0){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
});

elBtnFirst.addEventListener("click", function ()  {
  elInput.value = 1;
  if( elInput.value != 1){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
});


elBtnSecond.addEventListener("click", function ()  {
  elInput.value = 2;
  if( elInput.value != 2){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
});


elBtnThree.addEventListener("click", function ()  {
  elInput.value = 3;
  if( elInput.value != 3){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
});


elBtnFourth.addEventListener("click", function ()  {
  elInput.value = 4;
  if( elInput.value != 4){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
});


elBtnFifth.addEventListener("click", function ()  {
  elInput.value = 5;
  if( elInput.value != 5){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
});


elBtnSixth.addEventListener("click", function ()  {
  elInput.value = 6;
  if( elInput.value != 6){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
});


elBtnSeventh.addEventListener("click", function ()  {
  elInput.value = 7;
  if( elInput.value != 7){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
});


elBtnEighth.addEventListener("click", function ()  {
  elInput.value = 8;
  if( elInput.value != 8){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
});


elBtnNinth.addEventListener("click", function ()  {
  elInput.value = 9;
  if( elInput.value != 9){
    elYellow.className = "border-1";
    elRed.className = "border-4";

  }
  else{
    elRed.className = "border-2";
    elYellow.className = "border-3";
  }
});






console.log(elInput);



