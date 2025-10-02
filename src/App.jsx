import { use } from "react";
import { useRef, useState } from "react";


function App() {

  const alphabetUpper = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];

const [messageIndex, setMessageIndex] = useState('')

const [randomLetter, setRandonLetter] = useState("A")

const [tife, setTife] = useState(0)
const [anita, setAnita] = useState(0)

const popupRef = useRef(null)
const mainRef = useRef(null)
const messages = [
  "Score Updated",
  <>Tife Wins <br /> Tife: {tife} <br /> Anita: {anita}</>,
  <>Anita Wins <br /> Anita: {anita} <br /> Tife: {tife}</>,
  <>Draw! <br /> Anita: {anita} <br /> Tife: {tife}</>
];

const showPopup = () => {
  popupRef.current.style.display = "flex"
  mainRef.current.style.filter = "blur(6px)"
}

const firstRef = useRef(null)
const secondRef = useRef(null)


const updateTifeScore = () => {
  firstRef.current.style.display = "block"
  secondRef.current.style.display = "none"
  setTife(tife + 1)
  showPopup();
  setMessageIndex(0)
}

const updateAnitaScore = () => {
  firstRef.current.style.display = "block"
  secondRef.current.style.display = "none"
  setAnita(anita + 1)
  showPopup();
  setMessageIndex(0)
}

const generateRandomLetter = (array) => {
  const randomNumber = Math.floor(Math.random() * 26)
  setRandonLetter(array[randomNumber ])
}


const endGame = () => {
  firstRef.current.style.display = "none"
  secondRef.current.style.display = "block"
  if(tife > anita){
    showPopup();
    setMessageIndex(1)
  }else if(anita > tife){
    showPopup();
    setMessageIndex(2)
  }else if(tife == anita){
    showPopup();
    setMessageIndex(3)
  }
}

const okButton = () => {
  popupRef.current.style.display = "none"
  mainRef.current.style.filter = ""
}

const okButton2 = () => {
  popupRef.current.style.display = "none"
  mainRef.current.style.filter = ""

  setAnita(0)
  setTife(0)
}

  return (
    <>
    <div className="main" ref={mainRef}>

    
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
</div>

<div className="popup" ref={popupRef}>
   <div className='all'>
    <div className="message">{messages[messageIndex]}</div>
      <button className="firstok" onClick={okButton} ref={firstRef}>OK</button>
      <button className="secondok" onClick={okButton2} ref={secondRef}>OK</button>
    </div>
</div>
</>
  )
}

export default App
