function facts(){
    let html = `<h1 style="margin-left:50px;">Random facts</h1>`;
    html += `<div class="leftus"><p>Topp 3 Sanger </p>
    <a>Hotel California: Eagels<br>
    The Gambler: Kenny Rogers<br>
    Highwayman: The Highwaymen</a></div>
    
    <div class="leftus"><p>Topp 3 Spill</p>
    <a>The Legend of Zelda: A Link to the Past<br>
    The Legend of Zelda: Ocarina of Time<br>
    Diablo 2</a></div>
    
    <div class="leftus"><p>Topp 3 Filmer</p>
    <a>De tre Musketeer fra 1948<br>
    Lord of the Rings<br>
    Hobbiten</a></div>`;

    model.view = html;
    showApp();
}