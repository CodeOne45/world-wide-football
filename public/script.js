window.addEventListener("load", () => {
  // Map API
  let long;
  let lat;
  /*if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      let location = { lat, long };
      function initMap() {
        console.log("yesss!!!");
        let map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: location,
        });
      }
    });
  }*/
  document.getElementById("lanchSearch").addEventListener("click", function () {
    bestScorrer();
    document.getElementById("leagueName").value = "";
  });
});

function bestScorrer() {
  let league = document.getElementById("leagueName");
  document.getElementById("legueName").innerHTML = "league : " + league.value;
  fetch("https://football98.p.rapidapi.com/" + league.value + "/scorers", {
    method: "GET",
    headers: {
      "x-rapidapi-key": "fd5a8df027msh0b94b28cfd9f50dp164841jsnf9573aea2221",
      "x-rapidapi-host": "football98.p.rapidapi.com",
    },
  })
    .then((response) => {
      //console.log(response.json());
      return response.json();
    })
    .then((data) => {
      console.log(data[0]);

      var tableHTML = "<tr>";
      for (var headers in data[0]) {
        tableHTML += "<th>" + headers + "</th>";
      }
      tableHTML += "</tr>";

      for (var eachItem in data) {
        tableHTML += "<tr>";
        var dataObj = data[eachItem];
        for (var eachValue in dataObj) {
          tableHTML += "<td>" + dataObj[eachValue] + "</td>";
        }
        tableHTML += "</tr>";
      }

      document.getElementById("scorrerT").innerHTML = tableHTML;
    })
    .catch((err) => {
      console.error(err);
    });
}
