document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("generate").addEventListener("click", function () {
    var params = getParams();
    var username = document.getElementById("username").value;
    var repo = document.getElementById("repo").value;
    var branch = document.getElementById("branch").value;

    window.open("https://github.com/" + username + "/" + repo + "/new/" + branch + "/.github/" + params, "_self");
  });
});

function getParams() {
  var unchanged = "?filename=workflows/actions.log.yml&value="; // name: Log to github-actions.log\non:\n  workflow_dispatch:\n    inputs:\n      message:\n        description: 'message logged to github-actions.log'\n        required: true\n        type: string\n      logLevel:\n        description: 'logLevel. 1: INFO, 2: WARN, 3: ERROR'\n        default: 1\n        required: true\n        type: number\njobs:\n  log:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions%2Fcheckout@v3\n    - uses: actions%2Fsetup-node@v3\n      with:\n        node-version: 16\n    - name: ").replace(/ /g, "%20").replace(/\n/g, "%0D%0A")
  $.get("/code/github-actions.log", function (data) {
    window.data = data
  });
};