import React, { useState, useEffect } from 'react';

const AddressForm = ({ test }) => {
  // const [shippingCountries, setShippingCountries] = useState([]);
  // const [shippingCountry, setShippingCountry] = useState('');
  // const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  // const [shippingSubdivision, setShippingSubdivision] = useState('');
  // const [shippingOptions, setShippingOptions] = useState([]);
  // const [shippingOption, setShippingOption] = useState('');
  // <AddressForm test={someFunction} />


  // const fetchShippingCountries = async () => {
  //   try {countries
  //     const response = await fetch('http://localhost:3000/api/data?s=books');
  //     const data = await response.json();
  //     setShippingCountries(data.countries);
  //     setShippingCountry(Object.keys(data.countries)[0]);
  //   } catch (error) {
  //     console.error('Error fetching shipping countries:', error);
  //   }
  // };

  // const fetchSubdivisions = async (countryCode) => {
  //   try {
  //     const response = await fetch(`https://api.example.com/shipping/subdivisions/${countryCode}`);
  //     const data = await response.json();
  //     setShippingSubdivisions(data.subdivisions);
  //     setShippingSubdivision(Object.keys(data.subdivisions)[0]);
  //   } catch (error) {
  //     console.error('Error fetching subdivisions:', error);
  //   }
  // };

  // const fetchShippingOptions = async (countryCode, stateProvince = null) => {
  //   try {
  //     const response = await fetch(`https://api.example.com/shipping/options/${countryCode}?region=${stateProvince}`);
  //     const data = await response.json();
  //     setShippingOptions(data.options);
  //     setShippingOption(data.options[0].id);
  //   } catch (error) {
  //     console.error('Error fetching shipping options:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchShippingCountries();
  // }, []);

  // useEffect(() => {
  //   if (shippingCountry) fetchSubdivisions(shippingCountry);
  // }, [shippingCountry]);

  // useEffect(() => {
  //   if (shippingSubdivision) fetchShippingOptions(shippingCountry, shippingSubdivision);
  // }, [shippingSubdivision, shippingCountry]);

  return (
    <div className='address'>
      <h6>Shipping address</h6>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const addressData = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            address1: formData.get('address1'),
            email: formData.get('email'),
            city: formData.get('city'),
            zip: formData.get('zip'),
          };
          // test({ ...addressData, shippingCountry, shippingSubdivision, shippingOption });
        }}
      >
        <div className='payment'>  
          <input required type="text" name="firstName" placeholder="First name" /> 
          <input required type="text" name="lastName" placeholder="Last name" />
          <textarea id="add" name="add"  placeholder="Address" rows="4" cols="50"></textarea>  
          <input required type="email" name="email" placeholder="Email" />
          <input required type="text" name="city" placeholder="City" />
          <input required type="text" name="zip" placeholder="Zip / Postal code" />

        </div>
        <div>
          <button type="submit">Buy Now</button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
