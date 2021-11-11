import React, { useState } from 'react';

export const FormPractice = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  const handleSubmit = event => {
    event.preventDefault();

  };
  const handleFirstNameInputChange = event => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = event => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handlePhoneNumberInputChange = event => {
    setValues({ ...values, phoneNumber: event.target.value });
  };
  return (
    <div className="form-container">
      <form className="register-form">
        <input
          onChange={handleFirstNameInputChange}
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName" />
        <input
          onChange={handleLastNameInputChange}
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="Last Name" />
        <input
          onChange={handlePhoneNumberInputChange}
          value={values.phoneNumber}
          className="form-field"
          placeholder="Phone Number"
          name="phoneNumber" />
        <button onClick={handleSubmit} type="button">Submit</button>
      </form>
    </div>
  );
};
