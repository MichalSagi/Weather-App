const model = new Model();
const render = new Renderer();

const loadPage = async function() {
  await model.getDataFromDB();
  render.renderFirstData(model.cityData[0]);
  render.renderData(model.cityData.slice(1));
};

loadPage();

const handleSearch = async function() {
  let input = $("input").val();
  await model.getCityData(input);
  render.renderFirstData(model.cityData[0]);
  render.renderData(model.cityData.slice(1));
};

const saveDeleteCity = async function() {
  let name = $(this)
    .siblings(".name")
    .text();
  let i = model.cityData.findIndex(c => c.name === name);
  if (model.cityData.length != 0) {
    model.cityData[i].isSaved
      ? await model.removeCity(name)
      : await model.saveCity(name);
    render.renderFirstData(model.cityData[0]);
    render.renderData(model.cityData.slice(1));
  }
};

$("#btnSearch").on("click", handleSearch);
$("#primaryWeather-data").on("click", ".btnSave", saveDeleteCity);
$("#weather-data").on("click", ".btnSave", saveDeleteCity);
