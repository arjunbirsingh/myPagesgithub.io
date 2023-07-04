let body = document.body;
let arrayOfSources = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
];
let imgNum = 0;
let next = document.getElementById("next");
let previous = document.getElementById("previous");
let imgcont = document.querySelector(".imgcont");
let shoes = document.querySelector("#shoes");
previous.addEventListener("click", previousImg);
next.addEventListener("click", nextImg);
function previousImg() {
  if (imgNum < 1) {
    imgNum = 3;
  } else {
    imgNum--;
  }
  shoes.setAttribute("src", arrayOfSources[imgNum]);
  //   imgcont.style.background = `url(${arrayOfSources[imgNum]})`;
  //   imgcont.style.backgroundSize = "cover";
  //   imgcont.style.backgroundPosition = "top";
}
function nextImg() {
  if (imgNum >= 3) {
    imgNum = 0;
  } else {
    imgNum++;
  }
  shoes.setAttribute("src", arrayOfSources[imgNum]);
  // console.log(`images number is ${imgNum}`)
  //   imgcont.style.background = `url(${arrayOfSources[imgNum]})`;
  //   imgcont.style.backgroundSize = "cover";
  //   imgcont.style.backgroundPosition = "top";
}
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
plus.addEventListener("click", inc);
minus.addEventListener("click", dec);
let spanDispAmo = document.querySelector(".amountButton span");
let quanOfShoes = 0;
function inc() {
  quanOfShoes++;
  spanDispAmo.innerText = quanOfShoes;
}
function dec() {
  if (quanOfShoes < 1) {
    quanOfShoes = 0;
  } else {
    quanOfShoes--;
    spanDispAmo.innerText = quanOfShoes;
  }
}
let navCart = document.querySelector("nav #cart");
let cartInfo = document.querySelector(".cartInfo");
navCart.addEventListener("click", dispCart);
let disp = 0;
function dispCart() {
  if (disp == 0) {
    disp = 1;
    cartInfo.style.display = "block";
  } else {
    disp = 0;
    cartInfo.style.display = "none";
  }
}
let detail = document.querySelector("#detail");
let carthead = document.querySelector(".cartAndPfp #amount");
let addtocart = document.querySelector(".textcont>button");
addtocart.addEventListener("click", addtocartfunc);
let quanspan = document.querySelector("#price span");
// let quan=document.querySelector("#currency amountButton span");
function addtocartfunc() {
  if (quanOfShoes == 0) {
    carthead.innerText = "";
    detail.style.display = "none";
    cartisempty.style.display = "block";
  } else {
    cartisempty.style.display = "none";
    carthead.innerText = quanOfShoes;
    detail.style.display = "flex";
    quanspan.innerText = `${quanOfShoes} = $${quanOfShoes * 125}`;
    quanspan.style.fontWeight = 700;
  }
}
let deleteicon = document.querySelector("#delete");
deleteicon.addEventListener("click", eraseAll);
function eraseAll() {
  detail.style.display = "none";
  cartisempty.style.display = "block";
  carthead.style.display = "none";
}
let mobilemenu = document.querySelector(".mobilemenu");
let cross = document.querySelector("#cross");
let i;
cross.addEventListener("click", showornot);
let navham = document.querySelector("#menuLogo");
navham.addEventListener("click", function () {
  mobilemenu.style.display = "block";
});
function showornot() {
  i = 0;
  if (i == 0) {
    mobilemenu.style.display = "none";
    i = 1;
  } else {
    mobilemenu.style.display = "block";
    i = 0;
  }
}
