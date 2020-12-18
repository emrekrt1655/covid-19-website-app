import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";
import CardList from "./components/Card";
import Footer from "./components/Footer";
import CountryList from "./components/CountryList";
import axios from "axios";
import { Directions } from "@material-ui/icons";


function App(props) {
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
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    params: { country: `${countryName}` },
    headers: {
      "x-rapidapi-key": "3b04f00e76msh8bf8189258b4a93p1a6a2fjsnfeb7d7a08448",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  };

  const fetchData = () => {
    axios
      .request(options)
      .then(function (response) {
        setCountryData(response.data.response[0]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [countryName]);

  return (
    <>
      <div>
      <Navbar />
      <CountryList/>
      </div>
      <SearchBox setCountryName={setCountryName} ulke={countryName}
      Bas={getUserGeolocationDetails}/>
      <CardList item={countryData}   />
      <Footer/>
    </>
  );
}

export default App;