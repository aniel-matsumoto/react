import "./VerificarIdade.css";

const VerificarIdade = (props) => {
  let mensagem;
  let estilo;
  if (props.idade >= 18) {
    mensagem = `${props.idade} anos, é maior de idade`;
    estilo = { backgroundColor: "green", color: "yellow" };
  } else {
    mensagem = `${props.idade} anos, é menor de idade`;
    estilo = { backgroundColor: "red", color: "yellow" };
  }

  return (
    <div className="verificaridade" style={estilo}>
      {mensagem}
    </div>
  );
};

export default VerificarIdade;
