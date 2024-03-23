import "./MesaAtual.css";

let data = new Date();
let mes = data.getMonth();

const MesAtual = () => {
  return <div className="mesaAtual">{mes + 1}</div>;
};
export default MesAtual;
