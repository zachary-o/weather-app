
const HourlyForecast = ({ weather }) => {

  console.log(weather)
  return (
    <div className="hourly-forecast-container">
      {weather.map((card, index) => (
        <div key={index} className="hourly-forecast-card">
          <p>{card.time}</p>
          <img src={card.condition.icon} alt="" />
          <p>
            {card.temp_c}
            <span>&#8451;</span>
          </p>
        </div>
      ))}
    </div>
  );
};
export default HourlyForecast