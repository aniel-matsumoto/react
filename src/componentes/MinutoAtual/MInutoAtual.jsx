import'./MinutoAtual.css'

const MinutoAtual =()=>{

    let data =new Date()
    let minuto = data.getMinutes()

return <div className='minutoAtual'>{minuto}</div>

}

export default MinutoAtual;