import React, { useContext } from "react";
import {CountryContext} from '../context/CountryContext';
import Navbar from "./Navbar";
import ComboSearchBox from "./ComboSearchBox";
import CardList from "./CardList";
import Footer from "./Footer";
require("dotenv").config();

function Main() {
  const {countryList, countryData, setCountryName, getUserGeolocationDetails} = useContext(CountryContext)

  return (
    <React.Fragment>
      <Navbar/>
      <ComboSearchBox 
        setCountryName={setCountryName}
        bas={getUserGeolocationDetails} 
        item={countryList}
      />
      <CardList item={countryData}/>
      <Footer/>
    </React.Fragment>
  );
}

export default Main;
