
function showApp(){
    const appDiv = document.getElementById('app');
    let html = `<div class="navBar">${nagigavtion()} </div><br>`;
    html += `${model.view}`



    appDiv.innerHTML = html;
}

function nagigavtion(){
    return`<button style="margin-left:50px;" onclick="changePage('home')">Hjem</button>
    <button onclick="changePage('aboutMe')">Om meg</button>
    <button onclick="changePage('work')">Prosjekt</button>
    <button onclick="changePage('randomFacts')">Fakta</button>
    `;
}

//hjemmeside
function homePage(){
    let html = `<h1 style="margin-left:50px;">Min side</h1>
    <p style="margin-left:50px;">Dette er en liten side for å bli kjent med meg</p>
    <p style="margin-left:50px;">Her skal jeg vise litt om meg og ting jeg har holdt på med</p>`

    model.view = html;
    showApp();
}

