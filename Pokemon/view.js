showApp();
        function showApp(){
            let html = `
            
            <div class="hpBar1">
                <div class="myBar1" style="width:${healthbar1}%">${healthbar1}%</div>
            </div>
            <div class="hpBar2">
                <div class="myBar2" style="width:${healthbar2}%">${healthbar2}%</div>
                </div>
            <button class="sound" onclick="play()">O</button>
            <button class="sound" onclick="mute()">X</button>
            <button class="restart" onclick="restartGame()">Restart</button>

            <div class="veronica">${verry}</div>
            <img class="lycan" src="${verryFirst}">
            <img class="char" background-color="transparent" src="${newPokemon}">

            <div class="attack">${atk}</div>
            <div class="attack2">${dataInfo}</div>
             
           ` ;

           html += `<img onclick="anotherPokemon()" class="pokeball1" src="pokeball.png">
           <img onclick="verrynext()" class="pokeball2" src="pokeball.png">`;

           if(healthbar1 != 0 && healthbar2 != 0){ 
                    html+= ` <button onclick="attack(${0})" class="punchButton">${listofPokemon[chosenPokemon].attacks[0].name}</button>
                             <button onclick="attack(${1})" class="earthButton">${listofPokemon[chosenPokemon].attacks[1].name}</button>
                             <button onclick="attack(${2})" class="clawButton">${listofPokemon[chosenPokemon].attacks[2].name}</button>
                             <button onclick="attack(${3})" class="fireButton">${listofPokemon[chosenPokemon].attacks[3].name}</button>`
                }
          

            document.getElementById('app').innerHTML = html;
        }