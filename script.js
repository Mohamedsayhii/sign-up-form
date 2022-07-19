const check = function () {
  if (
    document.getElementById("pass").value != "" &&
    document.getElementById("pass").value ==
      document.getElementById("confirmpass").value
  ) {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "Passwords do match";
    document.getElementById("pass").style.borderColor = "green";
    document.getElementById("confirmpass").style.borderColor = "green";
    // document.getElementById("pass").style.color = "green";
    // document.getElementById("confirmpass").style.color = "green";
    // document.querySelector("label[for='pass']").style.color = "green";
    // document.querySelector("label[for='confirmpass']").style.color = "green";
  } else {
    // document.getElementById("pass").style.color = "red";
    // document.getElementById("confirmpass").style.color = "red";
    document.getElementById("pass").style.borderColor = "red";
    document.getElementById("confirmpass").style.borderColor = "red";
    // document.querySelector("label[for='pass']").style.color = "red";
    // document.querySelector("label[for='confirmpass']").style.color = "red";
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "* Passwords do not match";
  }
};
