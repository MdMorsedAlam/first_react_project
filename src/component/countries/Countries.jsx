import { useEffect, useState } from "react";
import "./Countries.css";
import Country from "../country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountrys, setvisitedCountrys] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitedCountrys = (country) => {
    const newVisitedCountreis=[...visitedCountrys,country]
    setvisitedCountrys(newVisitedCountreis);
    // console.log(country);
  };

  return (
    <div className="countries">
      <h1>Countries : {countries.length}</h1>
      <div style={{display:'flex',flexDirection: 'column',width:'200px',margin:'0 auto'}}>
        <h3>Visited Countrys :{visitedCountrys.length}</h3>
        <ol>
        {
            visitedCountrys.map(county=><li style={{color:'blue',fontSize:'24px'}} key={county.cca3}>{county.name.common}</li>)
        }
        </ol>
      </div>
      <div className="container">
        {countries.map((country) => (
          <Country
            handelVisitedCountrys={handelVisitedCountrys}
            key={country?.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
