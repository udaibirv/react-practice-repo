import React, { useState } from 'react';

export const FormPractice = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  return (
    <div className="form-container">
      <form className="register-form">
        <input
          value={values.firstName}
          className="form-field"
          placeholder="First Name"
          name="firstName" />
        <input
          value={values.lastName}
          className="form-field"
          placeholder="Last Name"
          name="Last Name" />
        <input
          value={values.phoneNumber}
          className="form-field"
          placeholder="Phone Number"
          name="phoneNumber" />
      </form>
    </div>
  );
};
