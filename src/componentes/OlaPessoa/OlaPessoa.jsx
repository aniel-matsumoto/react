import "./OlaPessoa.css";

const OlaPessoa = (props) => {
  let nome = props.nome;
  return <div className="olaPessoa">olá {nome}</div>;
};
export default OlaPessoa;
