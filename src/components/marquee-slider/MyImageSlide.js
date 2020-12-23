import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";
import FlagCard from "./flagCard";
import CountryCode from "./countryCode.json";
import FullWidth from "./FullWidth";


const People = ({ size,item }) => {
  const [key, setKey] = useState(nanoid());
  
  const countries = item?.map(item => {
    return({'label': item?.country})        
  })
  const countryNames = countries?.map(name => {
    return name.label
  })
  // const MyCode =  Object.keys(CountryCode).find(key => CountryCode[key] === countryNames[69]);
  
  // const [code, setCode] = useState("tr");
  // useEffect(() => {
  //   setCode(MyCode);
  // }, [code]);
 

  useEffect(() => {
    setKey(nanoid());
  }, [size, size.width]);

  let scale = 0.5;

  if (size && size.width > 800) {
    scale = 0.65;
  }

  if (size && size.width > 1100) {
    scale = 0.8;
  }

  if (size && size.width > 1400) {
    scale = 1;
  }

  return (
    <FullWidth>
      

      <div style={{ height: scale * 60 }} />

      <div style={{ height: scale * 200 }}>
        <Marquee key={key} velocity={2}>
          {times(231, Number).map((id) => (
           
            <FlagCard code={id} item={item} countryNames={countryNames[id]}/>

          ))}
        </Marquee>
      </div>
    </FullWidth>
  );
};

export default withSize()(People);