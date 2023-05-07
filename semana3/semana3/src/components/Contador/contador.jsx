import { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador(contador => contador + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Contador: {contador}</p>
    </div>
  );
}