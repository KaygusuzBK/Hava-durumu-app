export const weatherConfig = {
  background: {
    backgroundImage: "src/assets/img/Background.svg",
  },
  getImagePath: (weather, moment) => {
    const basePath = "src/assets/img/Weather/Weather=";
    const momentPath = ", Moment=";
    const extension = ".svg";

    const weatherMoment = `${basePath}${weather}${momentPath}${moment}${extension}`;

    return weatherMoment;
  },

  getIconPath: (weather) => {
    const basePath = "src/assets/img/Weather-icons/";
    const extension = ".svg";

    const weatherIcon = `${basePath}${weather}${extension}`;

    return weatherIcon;
  },
};
