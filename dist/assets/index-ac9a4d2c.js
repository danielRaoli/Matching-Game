(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const u=(e="danielicon",s="caricatura de daniel")=>`
    <article class="card-game">
        <img src="images/${e}.png" alt="${s}">
    </article>`;const h=(e,s)=>(window.cardFrontBack={},window.cardFrontBack.handleClick=l=>{const c=l.target.closest(".card-front-back");console.log(c),c.classList.toggle("-active")},`
    <div class="card-front-back" onClick="cardFrontBack.handleClick(event)">
        <div class="card -front">
            ${u()}
        </div>
        <div class="card -back">
            ${u(e,s)}
        </div>
    </div>
    `);const b=[{icon:"javaScript",alt:"ícone javascript"},{icon:"css",alt:"icone css"},{icon:"html",alt:"ícone html"}];const g=e=>(window.bannerVictory={},window.bannerVictory.HandleClick=()=>{location.reload()},`
        <section class="banner-victory -hide">
            <span></span>
            <p>Winner!!!</p>
            <img src="images/Archievement.png" alt="imagem do troféu">
            <button type="button" onClick="bannerVictory.HandleClick()" class="button">Restart</button>
        </section>
    `),v=e=>{const s=(r,n)=>{const a=document.querySelector(".banner-victory");console.log(a),console.log(r),console.log(n),r==2?setTimeout(()=>{a.classList.remove("-hide"),a.firstElementChild.innerHTML="Player1"},1e3):n==2&&setTimeout(()=>{a.classList.remove("-hide"),a.firstElementChild.innerHTML="Player2"},1e3)},l=r=>{const n=document.querySelector(".arrow-down"),a=[r[0].lastElementChild,r[1].lastElementChild];if(console.log(a),a[0].firstElementChild.lastElementChild.getAttribute("src")===a[1].firstElementChild.lastElementChild.getAttribute("src")){const i=document.querySelectorAll(".stitch-marker"),y=i[0].getAttribute("data-point"),p=i[1].getAttribute("data-point");n.getAttribute("data-player")==1?i[0].setAttribute("data-point",y==0?1:2):i[1].setAttribute("data-point",p==0?1:2),setTimeout(()=>r.forEach(f=>f.classList.add("-hide")),1500),s(i[0].getAttribute("data-point"),i[1].getAttribute("data-point"))}},c=()=>{const r=document.querySelector(".arrow-down"),n=r.getAttribute("data-player");r.setAttribute("data-player",n==1?2:1)},t=r=>{r.forEach(n=>n.classList.remove("-active"))};return window.boardGame={},window.boardGame.handleClick=()=>{const n=document.querySelector("#board-game").querySelectorAll(".card-front-back.-active");n.length===2&&(l(n),setTimeout(()=>{t(n),c()},1e3))},`
    <div id="board-game" onClick="boardGame.handleClick()">
        ${b.map(r=>h(r.icon,r.alt)).join("").repeat(e)}
        ${g()}
    </div>
    `};const $=()=>`
    <span class="vs-player">Vs</span>
    `;const w=(e=1)=>`
    <img data-player="${e}" class="arrow-down" src="images/arrowDown.png" alt="ícone de flecha">
    `;const C=e=>`
    <p class="player-name">${e}</p>
    `;const A=(e=0)=>`
    <div class="stitch-marker" data-point="${e}">
        <div class="point">
        </div>
        <div class="point">
        </div>
        <div class="point">
        </div>
    </div>
    `;const m=(e,s)=>`
    <div class="player-score">
        ${C(e)}
        ${A(s)}
    </div>
    `;const k=()=>`
    <header class="score-board">
        ${w()}
        ${m("Player1")}
        ${$()}
        ${m("Player2")}
    </header>
    `,L=document.querySelector("#root");L.insertAdjacentHTML("beforeend",`
    ${k()}
    ${v(2)} 
    `);
