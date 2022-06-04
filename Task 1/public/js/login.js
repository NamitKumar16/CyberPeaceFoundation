var BASE_URL = "http://localhost:3000/";
function login() {
  console.log("In login");
  var http = new XMLHttpRequest();
  var details = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };
  var data = JSON.stringify(details);
  var url = BASE_URL + "login";
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      console.log(http.responseText);
      var json = JSON.parse(this.responseText);
      localStorage.setItem("name", json.firstname);
      localStorage.setItem("email", json.email);
      location.href = "dashboard.html";
    }
  };
  http.open("post", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(data);
}
function register() {
  location.href = "register.html";
}
