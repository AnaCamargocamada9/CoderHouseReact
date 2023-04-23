import React, {useState}  from 'react'
import './ItemCount.css'

export const ItemCount = () => {

  const [counter, setCounter] = useState(0) 


const sumar = () =>{
    setCounter( counter +1 )
}
const restar = () =>{
  if (counter >0 ){
    setCounter(counter -1)
  }
}

const resetear = () =>{
  setCounter (0)

}




  return (
    <>
    <h4> CONTADOR:  {counter} </h4>

    <div className='btn'>

    <button on onClick={sumar}>➕</button>
      <button on onClick={restar}>➖</button>
      <button on onClick={resetear}>🔁</button>

    </div>



    </>
  )
}



//se pone entre llaver el counter en h4 porque es con codigo java.
//uno muestra y otro cambia el estado dentro de []. el primer lugar "muestra" y el segundo "cambia el estado"
//hook siempre se representan con constantes...
