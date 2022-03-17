import React from "react";
import styled from "styled-components";
import CountryCode from "./countryCode.json";



let scale = 1;
const Review = styled.div`
  /* width: ${(props) => props.scale * 350}px; */
  width: 350px;
  display: flex;
  padding: ${(props) => props.scale * 25}px;
  background: #ffcdd2;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  margin-left:30px;
`;

const Avatar = styled.div`
  border-radius: 50%;
  width: ${(props) => props.scale * 58}px;
  height: ${(props) => props.scale * 58}px;
  overflow: hidden;
  flex-shrink: 0;
  margin-right: ${(props) => props.scale * 15}px;
  img {
    max-width: 100%;
  }
`;

const Content = styled.div`
  p {
    margin: 0;
    color: #444;
    font-family: Helvetica, sans-serif;
    font-size: ${(props) => props.scale * 14}px;
    line-height: ${(props) => props.scale * 20}px;
    font-weight: 100;
    text-align: left;
  }
`;



const flagCard = ({code,item,countryNames}) => {
  
  const MyCode =  Object.keys(CountryCode).find(key => CountryCode[key] === countryNames);
  const img1 = `https://www.countryflags.io/${MyCode}/flat/64.png`;
  const img2 = `https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4ad36332-03b9-4804-aad7-acc8455a1109/d48ab2y-b241f962-f995-434e-97c2-6c696fb05dde.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNGFkMzYzMzItMDNiOS00ODA0LWFhZDctYWNjODQ1NWExMTA5XC9kNDhhYjJ5LWIyNDFmOTYyLWY5OTUtNDM0ZS05N2MyLTZjNjk2ZmIwNWRkZS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.wGQvU-O2YgWqTuUcn8n-q8sNmkE4lmLMZjNkVgZUFto`;
  const img3 = MyCode?img1:img2;
    //const { cases, deaths } = item[code];
  

    return (
        <div>
           <Review >
                {/* <Avatar scale={scale}>                
                  <img src={img3} alt={MyCode} />
                </Avatar> */}

                <Content scale={scale}>
                  
                  <h5 style={{marginLeft: '5px'}}>
                    {countryNames} ({item[code]?.day})
                  </h5>

                  <p>
                    Total Deaths: {item[code]?.deaths?.total}
                    <br />
                    New Deaths: {item[code]?.deaths?.new}
                  </p>

                </Content>
              </Review> 
        </div>
    )
}

export default flagCard
