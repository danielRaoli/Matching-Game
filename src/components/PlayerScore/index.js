import PlayerName from "../PlayerName"
import StitchMarker from "../StitchMarker"
import "./style.css"

const PlayerScore = (playerName,point) => {
    return /*html*/`
    <div class="player-score">
        ${PlayerName(playerName)}
        ${StitchMarker(point)}
    </div>
    `

}


export default PlayerScore;