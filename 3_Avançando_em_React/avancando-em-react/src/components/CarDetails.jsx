const CarDetails = ({ brand, km, color }) => {
  return (
    <div>
      <h2>Detalhes do carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>Modelo: {km}</li>
        <li>Ano: {color}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
