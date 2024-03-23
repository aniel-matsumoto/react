import'./DiaAtual.css';
let data= new Date()
let dia= data.getDate()

const DiaAtual = () => {
    return <div className='diaAtual' >
    {dia}
    </div>;

};

export default DiaAtual;