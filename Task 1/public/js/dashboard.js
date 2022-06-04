const fname = localStorage.getItem("name");
const email = localStorage.getItem("email");

if (fname == null) {
  document.getElementById("nav-name").innerText = "Welcome User";
  document.getElementById("body-name").innerText =
    "Please Login First to See Your Name Here";
  document.getElementById("body-email").innerText =
    "Please Login First to See Your Email Here";
} else {
  document.getElementById("nav-name").innerText = "Welcome " + fname;
  document.getElementById("body-name").innerText = "Your Name is " + fname;
  document.getElementById("body-email").innerText = "Your email is " + email;
}
