import "./ListaProdutos.css";

const ListaProdutos = () => {
  const listaprodutos = [
    "celular samsung",
    "notebook acer",
    "smart tv lg",
    "impressora hp",
    "tablet multilaser",
    "monitor dell",
  ];
  return (
    <div className="lista-prod">
      <ul>
        {listaprodutos.map((listaProduto) => (
          <li key={listaProduto}>{listaProduto} </li>
        ))}
      </ul>
    </div>
  );
};
export default ListaProdutos;
