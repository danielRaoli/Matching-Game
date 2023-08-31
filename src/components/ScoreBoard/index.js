
import VsPlayer from "../../VsPlayer";
import ArrowDonw from "../ArrowDown";
import PlayerScore from "../PlayerScore";
import "./style.css"

const ScoreBoard = () =>{
    return /*html*/`
    <header class="score-board">
        ${ArrowDonw()}
        ${PlayerScore("Player1",)}
        ${VsPlayer()}
        ${PlayerScore("Player2",)}
    </header>
    `
};

export default ScoreBoard;