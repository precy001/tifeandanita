import { useRef, useState } from "react";

function App() {

  const alphabetUpper = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

const [randomLetter, setRandonLetter] = useState("A")

const [tife, setTife] = useState(0)
const [anita, setAnita] = useState(0)

const updateTifeScore = () => {
  setTife(tife + 1)
  alert("Score Updated")
}

const updateAnitaScore = () => {
  setAnita(anita + 1)
  alert("Score Updated")
}

const generateRandomLetter = (array) => {
  const randomNumber = Math.floor(Math.random() * 26)
  setRandonLetter(array[randomNumber ])
}

const endGame = () => {
  if(tife > anita){
    alert(`Tife Wins \n Tife : ${tife} \n Anita : ${anita}`)
  }else if(anita > tife){
    alert(`Anita Wins \n Anita : ${anita} \n Tife: ${tife}`)
  }else if(tife == anita){
    alert(`Draw! \n Anita : ${anita} \n Tife : ${tife}`)
  }

  setTife(0)
  setAnita(0)
}

  return (
    <>
      <div className="head">Tife And Anita</div>
      <div className="random-letter">
        {randomLetter}
      </div>


<div className="buttons-container">
      <button 
      className="one"
      onClick={updateTifeScore}
      >
        Tife
      </button>

      <button
       className="two"
       onClick={updateAnitaScore}
       >
        Anita
      </button>
</div>

<div className="generate-letter">
  <button 
  className="one"
  onClick={() => generateRandomLetter(alphabetUpper)}
  >
    Generate Letter
  </button>
  <button className="two" onClick={endGame}>End Game</button>
</div>
    </>
  )
}

export default App
