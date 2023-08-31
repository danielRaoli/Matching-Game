import "./style.css"

const ArrowDonw = (player=1) => {
    return /*html*/ `
    <img data-player="${player}" class="arrow-down" src="images/arrowDown.png" alt="ícone de flecha">
    `
}

export default ArrowDonw;