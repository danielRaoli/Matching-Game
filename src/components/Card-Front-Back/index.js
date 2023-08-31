import CardGame from "../CardGame"
import "./style.css"

const CardFrontBack = (iconCard, altCard) => {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) =>{
        
        const $card = event.target.closest(".card-front-back");
        console.log($card)
        $card.classList.toggle("-active")

    }
    return /*html*/`
    <div class="card-front-back" onClick="cardFrontBack.handleClick(event)">
        <div class="card -front">
            ${CardGame()}
        </div>
        <div class="card -back">
            ${CardGame(iconCard,altCard)}
        </div>
    </div>
    `;
}

export default CardFrontBack;