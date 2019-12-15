import React, {useState, useEffect} from 'react';

function StateHook() {
  const tick = () => {
    setTime (prevTime => prevTime + 1);
  };
  
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h3>Hiciste <b> {count} </b> Heys</h3>
      <button onClick ={()=> setCount (count + 1)}>Sumar</button>
      <button onClick ={()=> setCount (count - 1)}>Restar</button>
      <button onClick ={()=> setCount (0)}>Reiniciar</button>
      <h3>Timer: {time}</h3>
    </div>
  );
};

export default StateHook;
