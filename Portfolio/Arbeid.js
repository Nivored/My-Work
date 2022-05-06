function myWork(){
    let html =  `<h1 style="margin-left:50px;"> Tidligere og nåværende prosjekter </h1>
    <div style="margin-left:50px;">In progress</div>
    <div style="margin-left:50px;"><a href="https://nivored.github.io/My-Work/Pokemon/"><img class="projekt" src="Prosjekt.png"></a></div>`;

    html += `<div style="margin-left:50px;">In progress</div>
    <div style="margin-left:50px;"><a  href="https://nivored.github.io/My-Work/Tibia/index.html"><img class="projekt" src="Tibia.png"</a></div>`
    
    model.view = html;
    showApp();
}
