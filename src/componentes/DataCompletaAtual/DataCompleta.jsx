import "./DataCompleta.css";

const DataCompleta = () => {
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let dia = data.getDate();
  let mes = data.getMonth() + 1;
  let ano = data.getFullYear();

  return (
    <div className="dataCompleta">
      {dia}/{mes}/{ano} {horas}:{minutos}
    </div>
  );
};

export default DataCompleta;
