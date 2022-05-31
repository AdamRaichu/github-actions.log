$.get("actions.log.yml", function (data) {
  window.data = data
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("generate").addEventListener("click", function () {
    var unchanged = "?filename=.github/workflows/actions.log.yml&value=";
    var username = document.getElementById("username").value;
    var repo = document.getElementById("repo").value;
    var branch = document.getElementById("branch").value;
    location.href = "https://github.com/" + username + "/" + repo + "/new/" + branch + "/" + unchanged + encodeURIComponent(data);
  });
});
