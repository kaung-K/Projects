/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
// import { WiDirectionDownLeft } from "react-icons/wi";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import { CgSearchLoading } from "react-icons/cg";
const Card = ({ data , error }) => {
  const calcDewPoint = (temp, humidity) => {
    const a = 17.27;
    const b = 237.7;
    const tempC = temp - 273.15;
    const alpha = (a * tempC) / (b + tempC) + Math.log(humidity / 100);
    return Math.round((b * alpha) / (a - alpha));
  };

  const getWindDirection = (deg) => {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    const index = Math.round(deg / 22.5) % 16;
    return directions[index];
  };
  

  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (JSON.stringify(data) !== "{}") {
    return (
      <div className="d-flex flex-column align-items-center gap-2 mt-4">
        <Clock className='mt-2 my-3'value={value} />
        <h2>
          {data.name}, {data.sys.country}
        </h2>
        <h1>
          <img
            src={`https://api.openweathermap.org//img/w/${data.weather[0].icon}.png`}
          />
          {Math.round(data.main.temp - 273.15)}°C
        </h1>
        <p>
          Wind Direction: 
          {data.wind.speed.toFixed(1)}m/s {getWindDirection(data.wind.deg)}
        </p>
        <p>Humidity:{data.main.humidity}%</p>
        <p>Dew point:{calcDewPoint(data.main.temp, data.main.humidity)}°C</p>
        <p>Visibility:{data.visibility / 1000}km</p>
      </div>
    );
  } else if(error) {
    return <h3 className="text-center mt-3 my-4 text-secondary">{error}</h3>
  } 
  else {
    return <h1 className="text-center mt-3 my-4 text-secondary"><CgSearchLoading /></h1>;
  }
};

export default Card;
