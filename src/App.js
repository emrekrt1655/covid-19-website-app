import React, {useEffect, useState} from 'react';

import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox';
import axios from "axios";


const options = {
  method: 'GET',
  url: 'https://covid-193.p.rapidapi.com/statistics',
  params: {country: 'Andorra'},
  headers: {
    'x-rapidapi-key': '3b04f00e76msh8bf8189258b4a93p1a6a2fjsnfeb7d7a08448',
    'x-rapidapi-host': 'covid-193.p.rapidapi.com'
  }
};




function App() {
  const fetchData = () => {axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  })};

  useEffect(()=>{fetchData()},[]);
  
  return (
    <>
    <Navbar/>
    <SearchBox/>
    </>
  );
}

export default App;
