import React, { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";
import BackButton from "./../BackButton";
import { Link } from "react-router-dom";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const APIKEY = "4bde5fff659a96c59438421c777e914e";

function CityForecast() {
  let { id } = useParams();
  useEffect(() => {
    getForecast();
  }, []);

  const [city, setCity] = useState({});
  const [dataList, setDataList] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${APIKEY}`;

  function getForecast() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
        data.list["dt_txt"] = data.list["dt_txt"] || {};

        setDataList(data.list);
      });
  }
  city.city = city.city || {};
  city.sys = city.sys || {};

  const data = [];

  dataList.forEach((item) => {
    data.push({
      name: item["dt_txt"],
      temperature: item["main"]["temp"] - (273.1).toFixed(1),
    });
  });

  function Example() {
    return (
      <AreaChart
        width={700}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="temperature"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    );
  }

  return (
    <div>
      <div>
        <h1 className="banner">5 Day Forecast </h1>
        {city.cod === "200" && (
          <h1>
            {city.city.name}, {city.city.country}
          </h1>
        )}

        {data.length > 1 && <Example />}

        <Link to="/">
          <BackButton />
        </Link>
      </div>
    </div>
  );
}

export default CityForecast;
