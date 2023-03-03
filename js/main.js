(async function getDatos() {
    let datos = null;
    try {
        const res = await fetch('data.json');
        datos = await res.json();
        pintarCont(datos)
    } catch (error) {
        console.log("error" + error);
    } finally {
        return datos;
    }
})();


let cardCont = document.querySelector(".card_cont");
let score = document.querySelector(".card_circle--num");
function pintarCont(data) {
    let num = 0;
    data.forEach(el => {
        num += el.score;
        cardCont.innerHTML += `
        <div class="cont" style="background-color: ${el.color}">
            <div class="cont_title">
                <img src="${el.icon}">
                <div class="title" style="color:${el.color}
                ;">${el.category}</div>
            </div>
            <div class="cont_num">
                ${el.score}<span>/100</span>
            </div>
        </div>`;
    });
    score.innerHTML = Math.floor(num / data.length);

}


