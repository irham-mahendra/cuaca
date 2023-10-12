function cariLokasi() {
  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather",
    type: "get",
    dataType: "json",
    data: {
      apikey: "052f8013bff9b6722c4f98e9adf84e2a",
      units: "metric",
      q: $("#search-input").val(),
    },
    success: function (result) {
      if (result.cod == 200) {
        $("#outLokasi").html(
          `<div class = "table-responsive-sm">
          <table class="table table-bordered table-striped">
          <tbody>
            <tr>
              <th><h5>City</h5></th>
              <td><h6>` +
            result.name +
            `, ` +
            result.sys.country +
            `</h6></td>
            </tr>
            <tr>
              <th><h5>Temperature</h5></th>
              <td><h6>` +
            result.main.temp +
            `&deg; C</h6></td>
              </tr>
              <tr>
              <th><h5>Temperature Range</h5></th>
              <td><h6>` +
            result.main.temp_min +
            `&deg; C to ` +
            result.main.temp_max +
            `&deg; C</h6></td>
              </tr>
              <tr>
              <th><h5>Weather</h5></th>
              <td><h6>` +
            result.weather[0].main +
            `, ` +
            result.weather[0].description +
            `</h6></td>
              </tr>
              <tr>
              <th><h5>Wind Speed</h5></th>
              <td><h6>` +
            result.wind.speed +
            ` m/s</h6></td>
              </tr>
              <tr>
              <th><h5>Cloud</h5></th>
              <td><h6>` +
            result.clouds.all +
            `%</h6></td>
            </tr>
            <tr>
              <th><h5>Geo coordinate</h5></th>
              <td><h6>` +
            result.coord.lon +
            ` longitude, 
            ` +
            result.coord.lat +
            ` latitude
              </tr>
          </tbody>
          </table>
        </div>
        `
        );
      }
    },
  });
  $("#search-input").val("");
}

$("#search-button").on("click", function () {
  cariLokasi();
});
$("#search-input").on("keyup", function (event) {
  if (event.keyCode === 13) {
    cariLokasi();
  }
});
document.body.style.backgroundImage = "url(img/sky.jpg)";
