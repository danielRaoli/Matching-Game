import "./src/style/settings/colors.css"
import "./src/style/generics/reset.css"
import "./src/style/elements/base.css"
import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from "./src/components/ScoreBoard";




const root = document.querySelector("#root")



root.insertAdjacentHTML('beforeend',
    `
    ${ScoreBoard()}
    ${BoardGame(2)} 
    `
)




