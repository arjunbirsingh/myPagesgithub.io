let body=document.body;
let btn=document.getElementById("btn");
let rate=document.getElementsByClassName("rate");
let ctr=0;
let prev;
let ratePoint;
rate[0].addEventListener("click",rateFunc);
rate[1].addEventListener("click",rateFunc);
rate[2].addEventListener("click",rateFunc);
rate[3].addEventListener("click",rateFunc);
rate[4].addEventListener("click",rateFunc);
btn.addEventListener("click",func);
function rateFunc(){
    ratePoint=parseInt(this.innerText);
    if(ctr>0){
    removeStyles(prev);
    }
    this.style.backgroundColor="var(--lightGrey)";
    this.style.fontWeight="700";
    this.style.color="white";
    ctr++;
    prev=this;
}
function removeStyles(temp){
    temp.style.backgroundColor="rgba(100, 139, 187, 0.1)";
    temp.style.fontWeight="400";
    temp.style.color="white";
}
function func(){
    if(ratePoint===undefined){
        document.getElementById("errorMsg").style.display="block";
    }
    else{
        document.getElementById("errorMsg").style.display="none";

        localStorage.setItem("rateforthnxpage",ratePoint);
        window.location.href="thankyou.html";
    }
}