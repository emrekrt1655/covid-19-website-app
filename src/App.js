import React, { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import ComboSearchBox from "./components/ComboSearchBox";
import CardList from "./components/Card";
import Footer from "./components/Footer";
import axios from "axios";



function App(props) {
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

  const options2 = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "x-rapidapi-key": "3b04f00e76msh8bf8189258b4a93p1a6a2fjsnfeb7d7a08448",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  };

  const fetchData2 = () => {
    axios
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
    <>
      
      <Navbar />
      
      <ComboSearchBox setCountryName={setCountryName}
      Bas={getUserGeolocationDetails} item={countryList}/>
      <CardList item={countryData}   />
      <Footer/>
    </>
  );
}

export default App;