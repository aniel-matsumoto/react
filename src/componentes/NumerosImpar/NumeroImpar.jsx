import "./NumeroImpar.css";

const NumeroImpar = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const NumerosImpares = numeros.filter((numero) => numero % 2 === 1);
  return (
    <div className="numeroImpar">
      <ul>
        {NumerosImpares.map((impar) => (
          <li key={impar}>{impar}</li>
        ))}
      </ul>
    </div>
  );
};
export default NumeroImpar;
