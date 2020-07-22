class Model {
  constructor() {
    this.cityData = [];
  }

  async getDataFromDB() {
    let data = await $.get("/cities");
    this.cityData = data;
  }
  async getCityData(cityName) {
    let data = await $.get(`/city/${cityName}`);
    let i = this.cityData.findIndex(c => c.name === cityName);
    i != null ? (data.isSaved = false) : (data.isSaved = true);
    this.cityData.unshift(data);
  }

  async saveCity(name) {
    const cityToSave = this.cityData.find(c => c.name === name);
    cityToSave.name === this.cityData.name ?
    cityToSave.isSaved = false: cityToSave.isSaved = true;
    await $.post("/city", cityToSave);
  }

  async removeCity(name) {
    let i = this.cityData.findIndex(c => c.name === name);
    await $.ajax({
      url: `/city/${name}`,
      type: "DELETE"
    });
    this.cityData.splice(i, 1);
  }
}
