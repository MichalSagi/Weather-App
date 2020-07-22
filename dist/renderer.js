class Renderer {
  renderFirstData(data) {
    const source = $("#primaryWeather-template").html();
    const template = Handlebars.compile(source);
    const someHTML = template(data);
    if (data) {
      $("#primaryWeather-data")
      .empty()
      .append(someHTML);
    } else {
      $("#primaryWeather-data").empty();
    }
  }

  renderData(data) {
    const source = $("#weather-template").html();
    const template = Handlebars.compile(source);
    const someHTML = template(data);
    $("#weather-data")
      .empty()
      .append(someHTML);
    $("input").val("");
  }
}
