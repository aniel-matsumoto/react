import "./Subtracao.css";

const Subtracao = (props) => {
  let menos = props.numero1 - props.numero2;

  return (
    <div className="subtracao">
      {props.numero1} - {props.numero2} = {menos}
    </div>
  );
};
export default Subtracao;
