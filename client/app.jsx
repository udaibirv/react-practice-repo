import React, { useState, useEffect } from 'react';
import Home from './pages/home';

const App = () => {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState(null);

  useEffect(async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const [item] = data.results;
    setPerson(item);
  }, []);

  return (

    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      {person && <div>{person.name.first}</div>}
    </div>
  );
};
export default App;
