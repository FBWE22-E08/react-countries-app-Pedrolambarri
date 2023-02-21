import {useEffect, useState }from 'react';
import {useParams} from 'react-router-dom';

export default function OneCountry() {

let {code} = useParams();

const [country, setCountry] = useState({});



useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://restcountries.com/v2/alpha/${code}`);
      const data = await response.json();
      setCountry(data);
    }
    fetchData();
  }, [code]);


  return (
    <div>
      <h1>{country.name}</h1>
      <img src={country.flag} alt={country.name} width="300" />
      <div>
        <p>
          <strong>Native Name:</strong> {country.nativeName}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
        <p>
          <strong>Population:</strong> {country.population}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Subregion:</strong> {country.subregion}
        </p>
        <p>
          <strong>Top Level Domain:</strong> {country.topLevelDomain}
        </p>
        <p>
          <strong>Currencies:</strong>{" "}
          {country.currencies && country.currencies.map((currency) => currency.name).join(", ")}
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          {country.languages && country.languages.map((language) => language.name).join(", ")}
        </p>
      </div>
    </div>
  );
}




// - create a new page component and call it OneCountry
// - make a Route for it that accepts a parameter in it's path, name it (:code)
// - make the link that leads to this page so it contains CountryCard so that when we click anywhere inside that card it should take us to the page OneCountry along with the :code param which is coming from the country object under a property called alpha2Code (country.alpha2Code)
// - finally, make a fetch in OneCountry on page load, to fetch the country with the code you received in the URL parameter (:code), use this URL to do the fetch: 
// `https://restcountries.com/v2/alpha/${code}` then save the response object in a local state (country) and show at least 9 or 10 of its properties to the user