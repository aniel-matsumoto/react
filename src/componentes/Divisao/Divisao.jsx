import "./Divisao.css"

const Divisao =(props)=>{

let resultado = props.numero1 / props.numero2
return <div className="divisao">
    {props.numero1} / {props.numero2} = {resultado}
</div>

};

export default Divisao