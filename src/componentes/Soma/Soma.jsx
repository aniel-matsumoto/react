import "./Soma.css";

const Soma = (props) => {
  let numero = props.numero1 + props.numero2;

  return (
    <div className="resultado">
      {props.numero1}+{props.numero2} ={numero}
    </div>
  );
};
export default Soma;
