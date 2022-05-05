function sorcA(){
    let html = `
    <button class="spells" onclick="sorcererAttacks()">Sorcerer Attack</button>
    <button class="spells" onclick="sorcererHealing()">Sorcerer Heal</button>
    <button class="spells" onclick="sorcererSupports()">Sorcerer Support</button>
    <button class="spells" onclick="sorcererRunes()">Sorcerer Rune</button>
    <div style="clear:left;" class="spellStyle">${sorcererSpellsA}</div>
    <div class="spellStyle">${sorcererSpellsH}</div>
    <div class="spellStyle">${sorcererSpellsS}</div>
    <div class="spellStyle">${sorcererSpellsR}</div>
`;

    model.view = html;
    showApp();
}