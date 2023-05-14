import "./styles.css"

const HourlyForecast = ({ weather }) => {

  return (
    <div className="hourly-forecast-container">
      {weather.map((card, index) => (
        <div key={index} className="hourly-forecast-card">
          <p className="time">{card.time.slice(-5)}</p>
          <img src={card.condition.icon} alt="" className="weather-icon"/>
          <p className="temperature">
            {card.temp_c}
            <sup className="temperature-index">&#8451;</sup>
          </p>
        </div>
      ))}
    </div>
  );
};
export default HourlyForecast