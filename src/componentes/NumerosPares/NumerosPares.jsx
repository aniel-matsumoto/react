import "./NumerosPares.css";

const NumerosPares = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  const numerosPares = numeros.filter((numero) => numero % 2 === 0);
  return (
    <div className="numeroPar">
        <ul>
            {numerosPares.map((par) =>(
               <li key={par}>{par}</li> 
            ))}
        </ul>
    </div>
  )
};
export default NumerosPares ;