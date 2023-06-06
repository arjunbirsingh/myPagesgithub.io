let body = document.body;
let button = document.getElementsByTagName("button");
let input = document.getElementsByTagName("input");
function isEmail(value) {
  // Regular expression pattern for validating email addresses
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the value matches the email pattern
  return emailPattern.test(value);
}

// Example usage
console.log(isEmail("example@example.com")); // Output: true
console.log(isEmail("notanemail")); // Output: false

button[0].addEventListener("click", function () {
  let isemail = isEmail(input[0].value);
  console.log(isemail);
  if (isemail) {
    //go to success page
    window.location.href="success.html";
  } else {
    let error=document.getElementById("error");
    error.innerText="Valid email required";
    input[0].style.border="2px solid hsl(4, 100%, 67%)"
    input[0].style.color="hsl(4, 100%, 67%)";
    input[0].style.backgroundColor=" rgba(222, 122, 115,0.2)";
  }
});
