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
let shoes=document.querySelector("#shoes");
previous.addEventListener("click", previousImg);
next.addEventListener("click", nextImg);
function previousImg() {
  if (imgNum < 1) {
    imgNum = 3;
  } else {
    imgNum--;
  }
  shoes.setAttribute("src",arrayOfSources[imgNum]);
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
shoes.setAttribute("src",arrayOfSources[imgNum]);
  // console.log(`images number is ${imgNum}`)
//   imgcont.style.background = `url(${arrayOfSources[imgNum]})`;
//   imgcont.style.backgroundSize = "cover";
//   imgcont.style.backgroundPosition = "top";
}
