const fname = localStorage.getItem("name");
const email = localStorage.getItem("email");

if (fname == null) {
  location.href = "/";
} else {
  var username = email.substring(0, email.indexOf("@"));
  document.getElementById("name").innerText = fname;
  document.getElementById("email").innerText = username;

  (function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
      setTimeout(function () {
        if ($("#spinner").length > 0) {
          $("#spinner").removeClass("show");
        }
      }, 1);
    };
    spinner();

    // Sidebar Toggler
    $(".sidebar-toggler").click(function () {
      $(".sidebar, .content").toggleClass("open");
      return false;
    });

    // Progress Bar
    $(".pg-bar").waypoint(
      function () {
        $(".progress .progress-bar").each(function () {
          $(this).css("width", $(this).attr("aria-valuenow") + "%");
        });
      },
      { offset: "80%" }
    );

    // Worldwide Sales Chart
    var ctx1 = $("#users").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [
          {
            label: "Allowed Users",
            data: [150000, 300000, 550000, 650000, 700000, 800000, 950000],
            backgroundColor: "rgba(0, 156, 255, .7)",
          },
          {
            label: "Blocked users",
            data: [30000, 85000, 110000, 150000, 200000, 250000, 350000],
            backgroundColor: "rgba(255, 0, 0, .7)",
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Salse & Revenue Chart
    var ctx2 = $("#stats").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
      type: "line",
      data: {
        labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
        datasets: [
          {
            label: "Normal",
            data: [15000, 20000, 19000, 25000, 23000, 30000, 33500],
            backgroundColor: "rgba(0, 156, 255, .5)",
            fill: true,
          },
          {
            label: "Blocked",
            data: [9900, 12000, 11000, 15000, 14000, 20000, 22000],
            backgroundColor: "rgba(255, 0, 0, 1)",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
  })(jQuery);
}
function logout() {
  localStorage.removeItem("name");
}
