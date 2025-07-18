const Challenge = () => {
  let n1 = 1;
  let n2 = 9;

  const handleSoma = () => {
    console.log(n1 + n2);
  };

  return (
    <div>
      <div>{n1}</div>
      <div>{n2}</div>
      <button onClick={handleSoma}>Clique aqui p/ somar!</button>
    </div>
  );
};

export default Challenge;
