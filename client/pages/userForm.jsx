import React, { useState, useEffect } from 'react';

const UserForm = () => {
  const [users, setUsers] = useState({
    name: '',
    password: '',
    email: ''
  });

  const setName = e => {
    setUsers({ ...users, name: e.target.value });
    console.log(users.name);
  };

  const setPassword = e => {
    setUsers({ ...users, password: e.target.value });
    console.log(users.password);
  };

  const setEmail = e => {
    setUsers({ ...users, email: e.target.value });
    console.log(users.email);
  };

  return (
    <div className='container container-fluid'>
      <h1>Hello, Please fill out this form</h1>
      <div className="form">
        <form>
          <label htmlFor='name'>Name</label>
          <input type='text' className="name" name='name' value={users.name} onChange={setName} />
          <label htmlFor='password'>Password</label>
          <input type='text' className='password' name='password' value={users.password} onChange={setPassword} />
          <label htmlFor='name'>Email</label>
          <input type='email' className='email' name='email' value={users.email} onChange={setEmail} />
        </form>
      </div>
    </div>
  );
};

export default UserForm;
