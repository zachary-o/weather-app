import "./styles.css";

const LeftPanel = ({ weather }) => {
  const changePicture = () => {
    if (weather.current.condition.text === "Sunny") {
      return "sunny";
    } else if (
      weather.current.condition.text === "Moderate or heavy rain with thunder"
    ) {
      return "thunderstorm";
    } else if (weather.current.condition.text === "Light rain") {
      return "rainy";
    } else if (weather.current.condition.text === "Partly cloudy") {
      return "cloudy";
    } else if (weather.current.condition.text === "Patchy heavy snow") {
      return "snowy";
    } else if (weather.current.condition.text === "Light drizzle") {
      return "rainy";
    } else if (weather.current.condition.text === "Light rain shower") {
      return "rainy";
    } else {
      return "rainbow";
    }
    //, Overcast, Mist, Patchy Rain possible, Clear, 
  };

  const changeBackgroundColor = () => {
    if (weather && weather.current && weather.current.condition) {
      if (weather.current.condition.text === "Sunny") {
        return "linear-gradient(#9faef926, #f9bab926, #f9d91526)";
      } else if (
        weather.current.condition.text === "Moderate or heavy rain with thunder"
      ) {
        return "linear-gradient(90deg, rgba(31,140,250,1) 18%, rgba(20,47,89,1) 100%)";
      } else if (weather.current.condition.text === "Light rain") {
        return "linear-gradient(90deg, rgba(145,209,246,1) 18%, rgba(30,150,255,1) 100%)";
      } else if (weather.current.condition.text === "Partly cloudy") {
        return "linear-gradient(115deg, rgba(226,199,252,1) 7%, rgba(255,255,255,1) 100%)";
      } else if (weather.current.condition.text === "Patchy heavy snow") {
        return "linear-gradient(115deg, rgba(175,222,250,1) 11%, rgba(255,255,255,1) 100%)";
      } else if (weather.current.condition.text === "Light drizzle") {
        return "linear-gradient(115deg, rgba(175,222,250,1) 11%, rgba(15,208,246,1) 100%)";
      } else if (weather.current.condition.text === "Light rain shower") {
        return "linear-gradient(115deg, rgba(56,175,246,1) 11%, rgba(26,129,149,1) 100%)";
      } else if (weather.current.condition.text === "Clear") {
        return "linear-gradient(115deg, rgba(3,73,254,1) 0%, rgba(0,33,66,1) 100%)";
      }
    }

    return "white";
  };

  const containerStyle = {
    background: changeBackgroundColor(),
  };

  const changeTextColor = () => {
    if (weather && weather.current && weather.current.condition) {
      if (weather.current.condition.text === "Clear") {
        return "lightyellow";
      }
    }
    return "black";
  };

  const textStyle = {
    color: changeTextColor(),
  };
  return (
    <section className="left-panel-container" style={containerStyle}>
      {weather.current && weather.location ? (
        <div className="data-container">
          <img
            src={`./images/${changePicture()}.svg`}
            alt="weather image"
            className="weather-picture"
          />
          <div className="text-data-container" style={textStyle}>
            <div className="top-row">
              <h1>
                {Math.round(weather.current.temp_c)}
                <sup className="h1-sup">&#8451;</sup>
              </h1>
              <div className="top-row-secondary">
                <h5>{weather.current.condition.text}</h5>
                <h5>{weather.location.localtime}</h5>
              </div>
            </div>
            <div className="bottom-row">
              <h2>
                {weather.location.name === "Kiev"
                  ? "Kyiv"
                  : weather.location.name}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading weather data...</div>
      )}
    </section>
  );
};

export default LeftPanel;
