$.get("actions.log.yml", function (data) {
  window.data = data
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("generate").addEventListener("click", function () {
    $.get("actions.log.yml", function (data) { });
    var unchanged = "?filename=workflows/actions.log.yml&value=";
    var username = document.getElementById("username").value;
    var repo = document.getElementById("repo").value;
    var branch = document.getElementById("branch").value;
    window.open("https://github.com/" + username + "/" + repo + "/new/" + branch + "/.github/" + unchanged + data, "_blank");
  });
});
