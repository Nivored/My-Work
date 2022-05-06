function changePage(side) {
    model.currentPage = side;
    updatePage();
    showApp();
}

// updatePage();
function updatePage() {
    if (model.currentPage == 'home') homePage();
    if (model.currentPage == 'knight') knightA();
    if (model.currentPage == 'sorcerer') sorcA();
    if (model.currentPage == 'druid') DruidA();
    if (model.currentPage == 'paladin') paladinA();
    showApp();
}

function druidRunes() {
    let druid = Math.floor(Math.random() * model.spells.druid.runes.length);
    let randomSpell = model.spells.druid.runes[druid];

    druidSpellsR = randomSpell.spell;
    updatePage();
}

function druidAttacks() {
    let druid = Math.floor(Math.random() * model.spells.druid.attacks.length);
    let randomSpell = model.spells.druid.attacks[druid];

    druidSpellsA = randomSpell.spell;
    updatePage();
}

function druidHealing() {
    let druid = Math.floor(Math.random() * model.spells.druid.healing.length);
    let randomSpell = model.spells.druid.healing[druid];

    druidSpellsH = randomSpell.spell;
    updatePage();
}

function druidSupport() {
    let druid = Math.floor(Math.random() * model.spells.druid.support.length);
    let randomSpell = model.spells.druid.support[druid];

    druidSpellsS = randomSpell.spell;
    updatePage();
}

function knightAttack() {
    let knight = Math.floor(Math.random() * model.spells.knight.attacks.length);
    let randomSpell = model.spells.knight.attacks[knight];

    knightSpellsA = randomSpell.spell;
    updatePage();
}

function knightHeals() {
    let knight = Math.floor(Math.random() * model.spells.knight.healing.length);
    let randomSpell = model.spells.knight.healing[knight];

    knightSpellsH = randomSpell.spell;
    updatePage();
}

function knightSupports() {
    let knight = Math.floor(Math.random() * model.spells.knight.support.length);
    let randomSpell = model.spells.knight.support[knight];

    knightSpellsS = randomSpell.spell;
    updatePage();
}

function paladinSupports() {
    let paladin = Math.floor(Math.random() * model.spells.paladin.support.length);
    let randomSpell = model.spells.paladin.support[paladin];

    paladinSpellsS = randomSpell.spell;
    updatePage();
}

function paladinAttacks() {
    let paladin = Math.floor(Math.random() * model.spells.paladin.attacks.length);
    let randomSpell = model.spells.paladin.attacks[paladin];

    paladinSpellsA = randomSpell.spell;
    updatePage();
}

function paladinHealing() {
    let paladin = Math.floor(Math.random() * model.spells.paladin.healing.length);
    let randomSpell = model.spells.paladin.healing[paladin];

    paladinSpellsH = randomSpell.spell;
    updatePage();
}

function paladinRunes() {
    let paladin = Math.floor(Math.random() * model.spells.paladin.runes.length);
    let randomSpell = model.spells.paladin.runes[paladin];

    paladinSpellsR = randomSpell.spell;
    updatePage();
}

function sorcererRunes() {
    let sorc = Math.floor(Math.random() * model.spells.sorcerer.runes.length);
    let randomSpell = model.spells.sorcerer.runes[sorc];

    sorcererSpellsR = randomSpell.spell;
    updatePage();
}

function sorcererAttacks() {
    let sorc = Math.floor(Math.random() * model.spells.sorcerer.attacks.length);
    let randomSpell = model.spells.sorcerer.attacks[sorc];

    sorcererSpellsA = randomSpell.spell;
    updatePage();
}

function sorcererHealing() {
    let sorc = Math.floor(Math.random() * model.spells.sorcerer.healing.length);
    let randomSpell = model.spells.sorcerer.healing[sorc];

    sorcererSpellsH = randomSpell.spell;
    updatePage();
}

function sorcererSupports() {
    let sorc = Math.floor(Math.random() * model.spells.sorcerer.support.length);
    let randomSpell = model.spells.sorcerer.support[sorc];

    sorcererSpellsS = randomSpell.spell;
    updatePage();
}


