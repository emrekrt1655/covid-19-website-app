import React, { useEffect, useState } from "react";
import {CountryContext} from './context/CountryContext';
import Main from './components/Main';
import axios from "axios";
require("dotenv").config();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [countryName, setCountryName] = useState("Turkey");

  const getUserGeolocationDetails = () => {
    fetch(
      "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
    )
    .then(response => response.json())
    .then((data) => setCountryName(data?.country_name))
    .catch((err) => console.log(err))
    .finally() ;
  };

  const fetchData = async () => {

    const options = {
      method: "GET",
      url: process.env.REACT_APP_API_URL,
      params: { country: `${countryName}` },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
      },
    };

    await axios
      .request(options)
      .then(function (response) {
        setCountryData(response.data.response[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const fetchData2 = async () => {

    const options2 = {
      method: "GET",
      url: process.env.REACT_APP_API_URL,
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": process.env.REACT_APP_API_HOST,
      },
    };

    await axios
      .request(options2)
      .then(function (response) {
        setCountryList(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [countryName]);

  useEffect(() => {
    fetchData2();
  }, []);

  return (
    <CountryContext.Provider value={{countryList, setCountryList, countryData, setCountryData, countryName, setCountryName, getUserGeolocationDetails}}>
      <Main/>
    </CountryContext.Provider>
  );
}

export default App;