import "./Home.css";
import { useState } from "react";

const api = {
  key: "API key",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    {
      e.key === "Enter" &&
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
          .then((res) => res.json())
          .then((result) => {
            setWeather(result);
            setCity("");
            console.log(result);
          });
    }
  };

  return (
    <>
      <div className="search-box">
        <input
          placeholder="Search city..."
          onChange={(e) => setCity(e.target.value)}
          value={city}
          onKeyPress={search}
        />
      </div>

      {typeof weather.main != "undefined" ? (
        <div>
          <div className="city">
            <p>
              {weather.name} {weather.sys.country}
            </p>
          </div>
          <div className="weather-box">
            <div className="weather-data">
              <p>Temperature:</p>
              <p>{weather.main.temp}°C</p>
            </div>
            <div className="weather-data">
              <p>Feels like:</p>
              <p>{weather.main.feels_like}°C</p>
            </div>
            <div className="weather-data">
              <p>Humidity:</p>
              <p>{weather.main.humidity}%</p>
            </div>
            <div className="weather-data">
              <p>Wind speed:</p>
              <p>{weather.wind.speed}m/s</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
export default Home;

/*function home() {
  const [userName, setUserName] = useState("Agda");
  const [userAge, setUserAge] = useState({});

  useEffect(() => {
    fetch(`https://api.agify.io?name=${userName}`)
      .then((response) => response.json())
      .then((result) => {
        setUserAge(result);
        console.log(result);
      });
  }, []);

  return (
    <>
      <input onChange={(event) => setUserName(event.target.value)} />
      <p>{userName}</p>
      <p>{userAge.age}</p>
    </>
  );

  <div>
        <h1>
          {weather.name} {weather.sys.country}
        </h1>
        <h2>{weather.main.temp}°C</h2>
        <h3>{weather.wind.speed}m/s</h3>
      </div>
}*/
