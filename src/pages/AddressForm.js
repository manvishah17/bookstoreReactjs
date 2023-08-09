// AddressForm.js
import React, { useState, useEffect } from 'react';

const AddressForm = ({ nextStep }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [subdivisions, setSubdivisions] = useState([]);
  const [selectedSubdivision, setSelectedSubdivision] = useState('');

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://api.example.com/countries');
      const data = await response.json();
      setCountries(data.countries);
      setSelectedCountry(data.countries[0].code);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };

  const fetchSubdivisions = async (countryCode) => {
    try {
      const response = await fetch(`https://api.example.com/subdivisions/${countryCode}`);
      const data = await response.json();
      setSubdivisions(data.subdivisions);
      setSelectedSubdivision(data.subdivisions[0].code);
    } catch (error) {
      console.error('Error fetching subdivisions:', error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetchSubdivisions(selectedCountry);
    }
  }, [selectedCountry]);

  return (
    <div>
      <h6>Shipping address</h6>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Collect form data and proceed
          nextStep();
        }}
      >
        <div>
          <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select value={selectedSubdivision} onChange={(e) => setSelectedSubdivision(e.target.value)}>
            {subdivisions.map((subdivision) => (
              <option key={subdivision.code} value={subdivision.code}>
                {subdivision.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
