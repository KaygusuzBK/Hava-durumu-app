export const weatherConfig = {
  background: {
    backgroundImage: "src/assets/img/Background.svg",
  },
  getImagePath: (weather = "Clear", moment = "Day") => {
    const basePath = "src/assets/img/Weather/Weather=";
    const momentPath = ", Moment=";
    const extension = ".svg";

    const weatherMoment = `${basePath}${weather}${momentPath}${moment}${extension}`;

    return weatherMoment;
  },

  getIconPath: (weather = "Clear", moment = "Day") => {
    const basePath = "src/assets/img/Weather-icons/";
    const momentPath = "-";
    const extension = ".svg";

    const weatherMoment = `${basePath}${weather}${momentPath}${moment}${extension}`;

    return weatherMoment;
  },
};
