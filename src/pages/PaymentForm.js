import React, { useState, useEffect } from 'react';

const PaymentForm = ({ shippingData, onCaptureCheckout }) => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('');

  const fetchPaymentMethods = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data?s=books');
      const data = await response.json();
      setPaymentMethods(data.methods);
      setPaymentMethod(data.methods[0].id);
    } catch (error) {
      console.error('Error fetching payment methods:', error);
    }
  };

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  return (
    <div>
      <h6>Payment details</h6>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCaptureCheckout({ ...shippingData, paymentMethod });
        }}
      >
        <div>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            {paymentMethods.map((method) => (
              <option key={method.id} value={method.id}>
                {method.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Confirm Order</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
