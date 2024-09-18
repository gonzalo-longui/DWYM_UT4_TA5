import { useState } from 'react'
import './App.css'

function App() {
  const [hide, setHide] = useState(false)

  let textButton = hide ? "Mostrar" : "Ocultar"

  return (
    <>
      <div className="boton">
        <button onClick={() => setHide((hide) => !hide)}>
          {textButton}
        </button>
      </div>
      {!hide && <p>Albion Online es un MMORPG no lineal en el que escribes tu propia historia sin limitarte a seguir un camino prefijado, explora un amplio mundo abierto con cinco biomas únicos, todo cuanto hagas tendrá su repercusión en el mundo, con su economía orientada al jugador de Albion los jugadores crean prácticamente todo el equipo a partir de los recursos que consiguen, el equipo que llevas define quien eres, cambia de arma y armadura para pasar de caballero a mago o juego como una mezcla de ambas clases, aventúrate en el mundo abierto y haz frente a los habitantes y las criaturas de Albion, inicia expediciones o adéntrate en mazmorras en las que encontraras enemigos aun mas difíciles, enfréntate a otros jugadores en encuentros en el mundo abierto, lucha por los territorios o por ciudades enteras en batallas tácticas, relájate en tu isla privada donde podrás construir un hogar, cultivar cosechas, criar animales, únete a un gremio, todo es mejor cuando se trabaja en grupo. Adéntrate ya en el mundo de Albion y escribe tu propia historia.</p>}
    </>
  )
}

export default App