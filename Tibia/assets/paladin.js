function paladinA(){
    let html = `
    <button class="spells" onclick="paladinAttacks()">Paladin Attack</button>
    <button class="spells" onclick="paladinHealing()">Paladin Heal</button>
    <button class="spells" onclick="paladinSupports()">Paladin Support</button>
    <button class="spells" onclick="paladinRunes()">Paladin Rune</button></div>
    <div style="clear:left;" class="spellStyle">${paladinSpellsA}</div>
    <div class="spellStyle">${paladinSpellsH}</div>
    <div class="spellStyle">${paladinSpellsS}</div>
    <div class="spellStyle">${paladinSpellsR}</div>
    `;

    model.view = html;
    showApp();
}