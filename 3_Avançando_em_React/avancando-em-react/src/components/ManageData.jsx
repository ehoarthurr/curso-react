import { useState } from "react";

const ManageData = () => {
  const someData = 10;

  console.log(someData);

  const [number, setNumber] = useState(15);

  return (
    <div>
      {/* <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div> */}
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Mudar o state</button>
      </div>
    </div>
  );
};

export default ManageData;
