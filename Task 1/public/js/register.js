var BASE_URL = "http://localhost:3000/";
function register() {
  console.log("In save");
  firstname = document.querySelector("#firstname").value;
  lastname = document.querySelector("#lastname").value;
  email = document.querySelector("#email").value;
  password = document.querySelector("#password").value;
  localStorage.setItem("name", firstname);
  localStorage.setItem("email", email);
  var user = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  };
  var http = new XMLHttpRequest();
  var data = JSON.stringify(user);
  var url = BASE_URL + "register";
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      console.log(http.responseText);
      var json = JSON.parse(this.responseText);
      location.href = "dashboard.html";
    }
  };
  http.open("post", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(data);
}
