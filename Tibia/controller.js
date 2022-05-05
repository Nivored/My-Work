function changePage(side){
    model.currentPage = side;
    updatePage();
    showApp();
}

// updatePage();
function updatePage(){
    if(model.currentPage == 'home') homePage();
    if(model.currentPage == 'knight') knightA();
    if(model.currentPage == 'sorcerer') sorcA();
    if(model.currentPage == 'druid') DruidA();
    if(model.currentPage == 'paladin') paladinA();
    showApp();
}

function druidRunes(){
    let druid = Math.floor(Math.random() * druidRune.length) ;
    if(druidRune != ''){
        druidSpellsR = druidRune[druid];
    }
    updatePage();
    // showApp();
}

function druidAttacks(){
    let druid = Math.floor(Math.random() * druidAtk.length) ;
    if(druidAtk != ''){
        druidSpellsA = druidAtk[druid];
    }
    updatePage();
    // showApp();
}

function druidHealing(){
    let druid = Math.floor(Math.random() * druidHeal.length) ;
    if(druidHeal != ''){
        druidSpellsH = druidHeal[druid];
    }
    updatePage();
    // showApp();
}

function druidSupport(){
    let druid = Math.floor(Math.random() * druidSup.length) ;
    if(druidSup != ''){
        druidSpellsS = druidSup[druid];
    }
    updatePage();
    // showApp();
}

function knightAttack(){
    let knight = Math.floor(Math.random() * knightAtk.length );
    if (knightAtk != ''){
        knightSpellsA = knightAtk[knight]
    }
    updatePage();
    //showApp();
}

function knightHeals(){
    let knight = Math.floor(Math.random() * knightHeal.length );
    if (knightHeal != ''){
        knightSpellsH = knightHeal[knight]
    }
    updatePage();
    // showApp();
}

function knightSupports(){
    let knight = Math.floor(Math.random() * knightSup.length );
    if (knightSup != ''){
        knightSpellsS = knightSup[knight]
    }
    updatePage();
    //showApp();
}

function paladinSupports(){
    let paladin = Math.floor(Math.random() * paladinSup.length );
    if (paladinSup != ''){
        paladinSpellsS = paladinSup[paladin]
    }
    updatePage();
    //showApp();
}

function paladinAttacks(){
    let paladin = Math.floor(Math.random() * paladinAtk.length );
    if (paladinAtk != ''){
        paladinSpellsA = paladinAtk[paladin]
    }
    updatePage();
    //showApp();
}

function paladinHealing(){
    let paladin = Math.floor(Math.random() * paladinHeal.length );
    if (paladinHeal != ''){
        paladinSpellsH = paladinHeal[paladin]
    }
    updatePage();
    //showApp();
}

function paladinRunes(){
    let paladin = Math.floor(Math.random() * paladinRune.length );
    if (paladinRune != ''){
        paladinSpellsR = paladinRune[paladin]
    }
    updatePage();
    //showApp();
}

function sorcererRunes(){
    let sorc = Math.floor(Math.random() * sorcererRune.length );
    if (sorcererRune != ''){
        sorcererSpellsR = sorcererRune[sorc]
    }
    updatePage();
    // showApp();
}

function sorcererAttacks(){
    let sorc = Math.floor(Math.random() * sorcererAtk.length );
    if (sorcererAtk != ''){
        sorcererSpellsA = sorcererAtk[sorc]
    }
    updatePage();
    // showApp();
}

function sorcererHealing(){
    let sorc = Math.floor(Math.random() * sorcererHeal.length );
    if (sorcererHeal != ''){
        sorcererSpellsH = sorcererHeal[sorc]
    }
    updatePage();
    //showApp();
}

function sorcererSupports(){
    let sorc = Math.floor(Math.random() * sorcererSup.length );
    if (sorcererSup != ''){
        sorcererSpellsS = sorcererSup[sorc]
    }
    updatePage();
    //showApp();
}


