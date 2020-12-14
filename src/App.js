import React, {useEffect, useState} from 'react';

import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox';
import CardList from './components/Card';
import axios from "axios";







function App(props) {
  const [countryData, setCountryData] = useState([]);
  const [countryName, setCountryName] = useState('Turkey')

  const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    params: {country: `${countryName}`},
    headers: {
      'x-rapidapi-key': '3b04f00e76msh8bf8189258b4a93p1a6a2fjsnfeb7d7a08448',
      'x-rapidapi-host': 'covid-193.p.rapidapi.com'
    }
  };


  const fetchData = () => {
    axios.request(options)
    .then(function (response) {
    setCountryData(response.data.response[0])
    console.log(response.data);
    console.log(response.data.response[0].cases.total)
    console.log(response.data.response[0].country)
  }).catch(function (error) {
    console.error(error);
  })};

  useEffect(()=>{fetchData()},[]);
  
  return (
    <>
    <Navbar/>
    <SearchBox/>
    <CardList item={countryData} />
   
    </>
  );
}

export default App;
