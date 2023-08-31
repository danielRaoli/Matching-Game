
import CardFrontBack from "../../components/Card-Front-Back";
import "./style.css"
import cards from "./data.js"


const BoardGame = (amount) =>{
    window.boardGame = {};
    window.boardGame.handleClick = () =>{
      const $boardGame = document.querySelector("#board-game")
      const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active")
        console.log($cardsActive.length)
      if($cardsActive.length === 2){
        setTimeout(() =>{
            $cardsActive.forEach((card) => card.classList.remove("-active"))
        }, 900)
      }
    }

    const htmlCardList = cards.map((card) => 
       CardFrontBack(card.icon,card.alt))

    const htmlCards = htmlCardList.join('')
    
    return `
    <div id="board-game" onClick="boardGame.handleClick()">
        ${htmlCards.repeat(amount)}
    </div>
    `
}

export default BoardGame;