function DruidA(){
    let html = `
    <button class="spells" onclick="druidAttacks()">Druid Attacks</button>
    <button class="spells" onclick="druidHealing()">Druid Heals</button>
    <button class="spells" onclick="druidSupport()">Druid Support</button>
    <button class="spells" onclick="druidRunes()">Druid Rune</button>
    <div style="clear:left;" class="spellStyle">${druidSpellsA}</div>
    <div class="spellStyle">${druidSpellsH}</div>
    <div class="spellStyle">${druidSpellsS}</div>
    <div class="spellStyle">${druidSpellsR}</div>
`;

    model.view = html;
    showApp();
}