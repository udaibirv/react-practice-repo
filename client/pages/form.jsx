import React, { useState } from 'react';

export const Authform = () => {

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    phone: ''
  });

  const handleSubmit = e => {
    e.preventDefault();

  };

  const handleFirst = e => {
    setValues({ ...values, firstName: e.target.value });

  };

  const handleLast = e => {
    setValues({ ...values, lastName: e.target.value });
  };

  const handlePhone = e => {
    setValues({ ...values, phone: e.target.value });
  };

  return (
    <div className="form">
      <form>
        <label>First Name: </label>
        <input required id="firstName" name="firstName" value={values.firstName} onChange={handleFirst} />
        <label>Last Name: </label>
        <input required id="lastName" name="lastName" value={values.lastName} onChange={handleLast} />
        <label>Phone Number: </label>
        <input required id="phone" name="phone" value={values.phone} onChange={handlePhone} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
