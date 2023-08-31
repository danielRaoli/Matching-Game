
import CardFrontBack from "../../components/Card-Front-Back";
import "./style.css"
import cards from "./data.js"
import BannerVictory from "../../components/BannerVictory";




const BoardGame = (amount) => {

    const VerifyVictory = ($markerAtributte1, $markerAtributte2) => {
        const banner = document.querySelector(".banner-victory")

        console.log(banner)
        console.log($markerAtributte1)
        console.log($markerAtributte2)
        if ($markerAtributte1 == 2) {
            setTimeout(() => {
                banner.classList.remove("-hide");
                banner.firstElementChild.innerHTML = "Player1"
            }, 1000)
        }
        else if ($markerAtributte2 == 2) {
            setTimeout(() => {
                banner.classList.remove("-hide");
                banner.firstElementChild.innerHTML = "Player1"

            }, 1000)

        }
    }

    const ScoredPoint = ($cardsActive) => {
        const arrowDonw = document.querySelector(".arrow-down");
        //card Backs
        const $cardsBack =
            [$cardsActive[0].lastElementChild,
            $cardsActive[1].lastElementChild];
        console.log($cardsBack)

        if ($cardsBack[0].firstElementChild.lastElementChild.getAttribute("src") === $cardsBack[1].firstElementChild.lastElementChild.getAttribute("src")) {
            const $scoreBoards = document.querySelectorAll(".stitch-marker");
            const $markerAtributte1 = $scoreBoards[0].getAttribute("data-point")
            const $markerAtributte2 = $scoreBoards[1].getAttribute("data-point")
            if (arrowDonw.getAttribute("data-player") == 1) {
                $scoreBoards[0].setAttribute("data-point", $markerAtributte1 == 0 ? 1 : 2)

            } else {
                $scoreBoards[1].setAttribute("data-point", $markerAtributte2 == 0 ? 1 : 2)
            }
            //sumir cartas
            setTimeout(() => $cardsActive.forEach((card) => card.classList.add("-hide")), 1500)

            VerifyVictory($scoreBoards[0].getAttribute("data-point"), $scoreBoards[1].getAttribute("data-point"))

        }
    }


    const ChangeTurn = () => {
        const arrowDonw = document.querySelector(".arrow-down");
        const arrowAtributte = arrowDonw.getAttribute("data-player")
        arrowDonw.setAttribute("data-player", arrowAtributte == 1 ? 2 : 1)

    }
    const HideCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove("-active"))

    }
    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector("#board-game")
        const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active")


        if ($cardsActive.length === 2) {
            ScoredPoint($cardsActive);
            setTimeout(() => {
                HideCards($cardsActive);
                ChangeTurn();
            }, 1000)
        }
    }

    const htmlCardList = cards.map((card) =>
        CardFrontBack(card.icon, card.alt))

    const htmlCards = htmlCardList.join('')

    return `
    <div id="board-game" onClick="boardGame.handleClick()">
        ${htmlCards.repeat(amount)}
        ${BannerVictory()}
    </div>
    `
}


export default BoardGame;