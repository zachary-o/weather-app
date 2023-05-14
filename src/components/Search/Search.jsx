import { getCityWeather } from "../../utils/getCityWeather";
import { getCities } from "../../utils/getCities";

import "./styles.css";
import search from "../../assets/icons/search.svg";
import cross from "../../assets/icons/cross.svg";

const Search = ({ searchResults, setWeather, searchCity, setSearchCity }) => {
  const handleSearch = (event) => {
    const searchInput = event.target.value;
    getCities(searchInput);
    setSearchCity(searchInput);
  };

  const newCityWeather = async (name) => {
    const response = await getCityWeather(name);
    setWeather(response);
    setSearchCity("");
  };

  const handleResetSearch = () => {
    setSearchCity("");
  };

  return (
    <div className="search-container">
      <img src={search} alt="" className="search-svg" />
      <input
        type="text"
        placeholder="City"
        value={searchCity}
        className={searchResults.length > 0 ? "search-active" : "search"}
        onChange={(event) => handleSearch(event)}
      />
      <img
        src={cross}
        alt=""
        onClick={handleResetSearch}
        className={searchResults.length > 0 ? "search-clear-active" : "search-clear"}
      />
      {searchResults && (
        <div
          className={
            searchResults.length > 0
              ? "search-results-container-active"
              : "search-results-container"
          }
        >
          {searchResults.map((obj) => (
            <div key={obj.id} className="result-container">
              <p onClick={() => newCityWeather(obj.name)}>
                {obj.name}, {obj.country}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Search;
