const fname = localStorage.getItem("name");
const email = localStorage.getItem("email");

// ./../json/dashboard.json

const url = "../json/dashboard.json";
var jD;
function get_dashboard() {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      setJsonData(data);
    });
}
function setJsonData(data) {
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
    document.getElementById("tUsers").innerText = data.total_users;
    document.getElementById("bUsers").innerText = data.blocked_users;
    document.getElementById("bSites").innerText = data.blacklisted_sites;
    document.getElementById("vUrl").innerText = data.visited_url;

    // Worldwide Sales Chart
    var ctx1 = $("#users").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
      type: "bar",
      data: {
        labels: data.users_chart.labels,
        datasets: [
          {
            label: "Allowed Users",
            data: data.users_chart.allowed_users,
            backgroundColor: "rgba(0, 156, 255, .7)",
          },
          {
            label: "Blocked users",
            data: data.users_chart.blocked_users,
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
        labels: data.stats_chart.labels,
        datasets: [
          {
            label: "Normal",
            data: data.stats_chart.normal,
            backgroundColor: "rgba(0, 156, 255, .5)",
            fill: true,
          },
          {
            label: "Blocked",
            data: data.stats_chart.blocked,
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
  $(document).ready(function () {
    $("#example").DataTable({
      data: data.visited_url_table,
      columns: [
        { title: "Links" },
        { title: "Classification" },
        { title: "User_agent" },
        { title: "Status" },
      ],
    });
  });
}

if (fname == null) {
  location.href = "/";
} else {
  get_dashboard();
  var username = email.substring(0, email.indexOf("@"));
  document.getElementById("name").innerText = fname;
  document.getElementById("email").innerText = username;
}
function logout() {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
}
