import "./HoraAtual.css";

let hora = new Date();
let dia = hora.getHours ();

const HoraAtual = () => {
  return <div className="horaAtual">{dia}</div>;
};
export default HoraAtual;
