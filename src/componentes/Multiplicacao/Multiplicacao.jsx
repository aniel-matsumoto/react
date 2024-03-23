import "./Multiplicacao.css";

const Multiplicacao = (props) => {
  let resultado = props.numero1 * props.numero2;

  return (
    <div className="multiplica">
      {props.numero1} * {props.numero2} = {resultado}
    </div>
  );
};
export default Multiplicacao;
