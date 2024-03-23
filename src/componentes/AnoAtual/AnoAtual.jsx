import "./AnoAtual.css";
let data = new Date();
let ano = data.getFullYear();
const AnoAtual = () => {
  return <div className="anoAtual">{ano}</div>;
};
export default AnoAtual;
