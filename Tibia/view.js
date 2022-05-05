
function showApp(){
    const appDiv = document.getElementById('app');
    let html = ``;
    html +=`<div class="navBar">${nagigavtion()} </div><br>`;
    html += `${model.view}`;


    appDiv.innerHTML = html;
}

function nagigavtion(){
    return`<button style="margin-left:50px;" onclick="changePage('home')">Hjem</button>
    <div class="imgDiv"><img src="../Tibia/assets/Knight.gif" onclick="changePage('knight')">
    <img src="../Tibia/assets/Sorcerer.gif" onclick="changePage('sorcerer')">
    <img src="../Tibia/assets/Druid.gif" onclick="changePage('druid')">
    <img src="../Tibia/assets/Paladin.gif" onclick="changePage('paladin')"></div>
    `;
}
