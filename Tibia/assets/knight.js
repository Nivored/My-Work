function knightA(){
    let html = ` <button class="spells" onclick="knightAttack()">Knight Attack</button>
    <button class="spells" onclick="knightHeals()">Knight Heals</button>
    <button class="spells" onclick="knightSupports()">Knight Support</button>
    <div style="clear:left;" class="spellStyle">${knightSpellsA}</div>
    <div class="spellStyle">${knightSpellsH}</div>
    <div class="spellStyle">${knightSpellsS}</div>`;

    model.view = html;
    showApp();
}
