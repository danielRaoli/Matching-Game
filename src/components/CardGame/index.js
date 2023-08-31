import "./style.css"


const CardGame = (img="danielicon",alt="caricatura de daniel" ) =>{
    return `
    <article class="card-game">
        <img src="images/${img}.png" alt="${alt}">
    </article>`;
}

export default CardGame;