import React, { useState } from 'react';

const userForm = () => {
  const [user, setUser] = useState({
    name: '',
    password: '',
    email: ''
  });

  const handleName = e => {
    setUser({ ...user, name: e.target.value });
  };

  const handlePassword = e => {
    setUser({ ...user, password: e.target.value });
  };

  const handleEmail = e => {
    setUser({ ...user, email: e.target.value });
  };

  return (
  <div>
      <h1>Hello, Please complete this form</h1>
      <div className="form user-form">
        <label htmlFor='name'>Name</label>
        <input type='text' value={user.name} onChange={handleName} className='input' />
        <label htmlFor='password'>Password</label>
        <input type='password' value={user.password} onChange={handlePassword} className='input' />
        <label htmlFor='email'>Password</label>
        <input type='email' value={user.email} onChange={handleEmail} className='input' />
    </div>
  </div>
  );
};

export default userForm;
