let body = document.body;
let step1 = document.querySelector("#step1");
let step3 = document.querySelector("#step3");
let step4 = document.querySelector("#step4");
let heading = document.querySelector(".top h1");
let paragh = document.querySelector(".top p");
let monoryear="Monthly";
let arcadeRate=document.querySelector(".card1 #rate");
let advancedRate=document.querySelector(".card2 #rate");
let proRate=document.querySelector(".card3 #rate");
let twomonthsfree=document.querySelectorAll("#twomonthsfree");
let step3wrapper=document.querySelector(".wrapper");
let toggle=document.querySelector(".toggle");
step1.addEventListener("click", step1Show);
step2.addEventListener("click", step2Show);
step3.addEventListener("click", step3Show);
step4.addEventListener("click", step4Show);
let nextStep = document.querySelector(".nextstep");
let goback = document.querySelector(".goback");
let step1form = document.querySelector("form");
let step2content = document.querySelector(".step2content");
let step3optcont=document.querySelector(".optionCont");
let step4summary=document.querySelector(".step4summary");
let change=document.querySelector("#change");
change.addEventListener("click",step2Show);
let card1=document.querySelector(".card1");
let card2=document.querySelector(".card2");
let card3=document.querySelector(".card3");
card1.addEventListener("click",function(){
  card1.classList.toggle("border-color");
  card2.classList.remove("border-color");
  card3.classList.remove("border-color");
});
card2.addEventListener("click",function(){
  card2.classList.toggle("border-color");
  card1.classList.remove("border-color");
  card3.classList.remove("border-color");
});
card3.addEventListener("click",function(){
  card3.classList.toggle("border-color");
  card2.classList.remove("border-color");
  card1.classList.remove("border-color");
});
step1Show();
function nextStepFunction(stepNumber) {
  //   console.log(stepNumber);
  switch (stepNumber) {
    case 1: {
      step2Show();
      break;
    }
    case 2: {
      step3Show();
      break;
    }
    case 3: {
      step4Show();
      break;
    }
    // case 4: {
    //   step4Show();
    //   break;
    // }
  }
}
function gobackfunction(stepNumber) {
  //   console.log(stepNumber);
  switch (stepNumber) {
    // case 1: {
    //   step2Show();
    //   break;
    // }
    case 2: {
      step1Show();
      break;
    }
    case 3: {
      step2Show();
      break;
    }
    case 4: {
      step3Show();
      break;
    }
  }
}
function step1Show() {
  step2content.style.display = "none";
  step1form.style.display = "flex";
  step3optcont.style.display="none";
  step4summary.style.display="none";
  heading.innerText = "Personal Info";
  paragh.innerText =
    "Please provide your name, email address and phone number.";
  step1.style.backgroundColor = "var(--pastelblue)";
  step1.style.color = "black";
  step1.style.fontWeight = "700";
  nextStep.addEventListener("click", function () {
    nextStepFunction(1);
  });
  goback.style.display = "none";
}
function step2Show() {
  step1form.style.display = "none";
  step2content.style.display = "grid";
  step3optcont.style.display="none";
  step4summary.style.display="none";
  heading.innerText = "Select your plan";
  paragh.innerText = "You have the option of monthly or yearly billing.";
  step2.style.backgroundColor = "var(--pastelblue)";
  step2.style.color = "black";
  step2.style.fontWeight = "700";
  nextStep.addEventListener("click", function () {
    nextStepFunction(2);
  });
  goback.style.display = "block";
  goback.addEventListener("click", function () {
    gobackfunction(2);
  });
}
function step3Show() {
  step2content.style.display = "none";
  step1form.style.display = "none";
  step3optcont.style.display="flex";
  step4summary.style.display="none";
  heading.innerText = "Pick add-ons";
  paragh.innerText = "Add-ons help enhance your gaming experience";
  step3.style.backgroundColor = "var(--pastelblue)";
  step3.style.color = "black";
  step3.style.fontWeight = "700";
  nextStep.addEventListener("click", function () {
    nextStepFunction(3);
  });
  goback.style.display = "block";
  goback.addEventListener("click", function () {
    gobackfunction(3);
  });
}
function step4Show() {
  step2content.style.display = "none";
  step1form.style.display = "none";
  step3optcont.style.display="none";
  step4summary.style.display="block";
  heading.innerText = "Finishing up";
  paragh.innerText = "Double-check everything looks OK before confirming.";
  step4.style.backgroundColor = "var(--pastelblue)";
  step4.style.color = "black";
  step4.style.fontWeight = "700";
  nextStep.addEventListener("click", function () {
    nextStepFunction(4);
  });
  goback.style.display = "block";
  goback.addEventListener("click", function () {
    gobackfunction(4);
  });
}
let toggleButtonStep2 = document.querySelector(".togButt .circleButton");
let togbutt = 1;
toggleButtonStep2.addEventListener("click", function () {
  if (togbutt == 1) {
    toggleButtonStep2.style.left = "60%";
    togbutt = 0;
    monoryear="Yearly";
  } else {
    toggleButtonStep2.style.left = "0";
    togbutt = 1;
    monoryear="Monthly";
  }

  if(monoryear=="Monthly"){
    arcadeRate.innerText="$9/mo";
    advancedRate.innerText="$12/mo";
    proRate.innerText="$15/mo";
    twomonthsfree[0].style.display="none";
    twomonthsfree[1].style.display="none";
    twomonthsfree[2].style.display="none";
    toggle.style.marginTop="3rem";
  }
  else{
    arcadeRate.innerText="$90/mo";
    advancedRate.innerText="$120/mo";
    proRate.innerText="$150/mo";
    twomonthsfree[0].style.display="block";
    twomonthsfree[1].style.display="block";
    twomonthsfree[2].style.display="block";
    toggle.style.marginTop="0";
  }
});
