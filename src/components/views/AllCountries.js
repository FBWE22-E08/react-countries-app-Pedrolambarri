import React, { useState, useEffect } from "react";
import CountryCard from "../CountryCard";

export default function AllCountries() {
  // fetch all countries on page load (what hook should you use for that?) then save the received array of countries in a local state (call it countries)

const [countries, setCountries] = useState([]);

useEffect(() => {
  fetchData();
}, []);

async function fetchData() {
  const response = await fetch('https://restcountries.com/v2/all');
  const data = await response.json();
  setCountries(data);
}


  return (
    <div className="cardsContainer">
      {countries.map((item, i) => <CountryCard country={item} key={i}/>)}
                        

    </div>
  );
}
