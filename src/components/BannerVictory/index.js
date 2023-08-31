import "./style.css"

const BannerVictory = (name) => {
    window.bannerVictory = {}
    window.bannerVictory.HandleClick = () => {
        location.reload();
    }
    return `
        <section class="banner-victory -hide">
            <span></span>
            <p>Winner!!!</p>
            <img src="images/Archievement.png" alt="imagem do troféu">
            <button type="button" onClick="bannerVictory.HandleClick()" class="button">Restart</button>
        </section>
    `

}

export default BannerVictory;