import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';

const AddressForm = ({ checkoutToken, test }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const fetchShippingCountries = async (checkoutTokenId) => {
    const response = await commerce.services.localeListShippingCountries(checkoutTokenId);
    setShippingCountries(response.countries);
    setShippingCountry(Object.keys(response.countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const response = await commerce.services.localeListSubdivisions(countryCode);
    setShippingSubdivisions(response.subdivisions);
    setShippingSubdivision(Object.keys(response.subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken]);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision, checkoutToken]);

  return (
    <>
      <h6>Shipping address</h6>
      <form onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const formData = {
          firstName: data.get('firstName'),
          lastName: data.get('lastName'),
          address1: data.get('address1'),
          email: data.get('email'),
          city: data.get('city'),
          zip: data.get('zip'),
        };
        test({ ...formData, shippingCountry, shippingSubdivision, shippingOption });
      }}>
        <div>
          <input required type="text" name="firstName" placeholder="First name" />
          <input required type="text" name="lastName" placeholder="Last name" />
          <input required type="text" name="address1" placeholder="Address line 1" />
          <input required type="email" name="email" placeholder="Email" />
          <input required type="text" name="city" placeholder="City" />
          <input required type="text" name="zip" placeholder="Zip / Postal code" />
          <select value={shippingCountry} onChange={(e) => setShippingCountry(e.target.value)}>
            {Object.entries(shippingCountries).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
          <select value={shippingSubdivision} onChange={(e) => setShippingSubdivision(e.target.value)}>
            {Object.entries(shippingSubdivisions).map(([code, name]) => (
              <option key={code} value={code}>
                {name}
              </option>
            ))}
          </select>
          <select value={shippingOption} onChange={(e) => setShippingOption(e.target.value)}>
            {shippingOptions.map((sO) => (
              <option key={sO.id} value={sO.id}>
                {`${sO.description} - (${sO.price.formatted_with_symbol})`}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to="/cart">Back to Cart</Link>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
};

export default AddressForm;
