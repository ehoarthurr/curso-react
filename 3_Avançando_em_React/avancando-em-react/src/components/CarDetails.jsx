const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Modelo: {km}</li>
        <li>Ano: {color}</li>
      </ul>
      {newCar && <p>Este é um carro novo!</p>}
    </div>
  );
};

export default CarDetails;
