let body = document.body;
let dayerror = document.querySelector("#dayError");
let montherror = document.querySelector("#monthError");
let yearerror = document.querySelector("#yearError");
let inp1, inp2, inp3;
inp1 = document.getElementById("#day");
inp2 = document.getElementById("#month");
inp3 = document.getElementById("#year");
let label = document.getElementsByTagName("label");
const currentYear = new Date().getFullYear();
let sign = document.querySelector("#sign");
let bool1=0,bool2=0,bool3=0;
let res1=document.getElementById("res1");
let res2=document.getElementById("res2");
let res3=document.getElementById("res3");
sign.addEventListener("click", checker);
function checker() {
  if (inp1.value === "") {
    dayerror.innerHTML = "This field is required";
    inp1.style.borderColor="hsl(0, 100%, 67%)";
    label[0].style.color="hsl(0, 100%, 67%)";
  } else if (inp1.value > 31 || inp1.value < 1) {
    dayerror.innerHTML = "Must be a valid day";
    inp1.style.borderColor="hsl(0, 100%, 67%)";
    label[0].style.color="hsl(0, 100%, 67%)";
  } else {
    dayerror.innerHTML = "";
    inp1.style.borderColor="hsl(0, 0%, 94%)";
    label[0].style.color="hsl(0, 1%, 44%)";
    bool1=1;
  }
  if (inp2.value === "") {
    montherror.innerHTML = "This field is required";
    inp2.style.borderColor="hsl(0, 100%, 67%)";
    label[1].style.color="hsl(0, 100%, 67%)";
  }
  else if (inp2.value > 12 || inp2.value < 1) {
    montherror.innerHTML = "Must be a valid month";
    inp2.style.borderColor="hsl(0, 100%, 67%)";
    label[1].style.color="hsl(0, 100%, 67%)";
  } else {
    montherror.innerHTML = "";
    inp2.style.borderColor="hsl(0, 0%, 94%)";
    label[1].style.color="hsl(0, 1%, 44%)";
    bool2=1;
  }
  if (inp3.value === "") {
    yearerror.innerHTML = "This field is required";
    inp3.style.borderColor="hsl(0, 100%, 67%)";
    label[2].style.color="hsl(0, 100%, 67%)";
  } else if (inp3.value > currentYear) {
    yearerror.innerHTML = "Must be in the past";
    inp3.style.borderColor="hsl(0, 100%, 67%)";
    label[2].style.color="hsl(0, 100%, 67%)";
  } else {
    yearerror.innerHTML = "";
    inp3.style.borderColor="hsl(0, 0%, 94%)";
    label[2].style.color="hsl(0, 1%, 44%)";
    bool3=1;
  }
  if(bool1*bool2*bool3){
    res1.innerText=(new Date().getFullYear())-inp3.value;
    res2.innerText=(new Date().getMonth()+1)-inp2.value;
    res3.innerText=Math.abs((new Date().getDate())-inp1.value);
  }
}
