export const weatherConfig = {
  background: {
    backgroundImage: "src/assets/img/Background.svg",
  },
  getImagePath: (weather, moment) => {
    const basePath = "/src/assets/img/Weather/Weather=";
    const momentPath = ", Moment=";
    const extension = ".svg";

    const defaultWeather = "Clear";
    const defaultMoment = "Day";

    weather = weather || defaultWeather;
    moment = moment || defaultMoment;

    const weatherMoment = `url('${basePath}${weather}${momentPath}${moment}${extension}')`;

    return weatherMoment;
  },

  getIconPath: (weather, moment) => {
    const basePath = "/src/assets/img/Weather-icons/";
    const momentPath = "-";
    const extension = ".svg";

    const defaultWeather = "Clear";
    const defaultMoment = "Day";

    weather = weather || defaultWeather;
    moment = moment || defaultMoment;

    const weatherMoment = `${basePath}${weather}${momentPath}${moment}${extension}`;

    return weatherMoment;
  },
};

// Kullanım örneği:
const imagePath = weatherConfig.getImagePath("Rain", "Night"); // Belirli bir hava durumu ve an için bir görüntü yolu alır
const iconPath = weatherConfig.getIconPath("Rain", "Night"); // Belirli bir hava durumu ve an için bir simge yolu alır
