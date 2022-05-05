const model = {
    currentPage: 'home',
    view: '',

    // data

    // model.spells.druid

    // spells: {
    //     druid: [
    //         {spell: "Exura sio", effect: 70},
    //         {spell: "1", effect: 70},
    //         {spell: "2", effect: 70}
    //     ],
    //     sorcerer: [],
    //     paladin: [],
    //     knight: []
    //}

}
        //Druid
        let druidSpellsR = '';
        let druidSpellsA = '';
        let druidSpellsH = '';
        let druidSpellsS = '';

        let druidRune = ['adana mort', 'adori mas frigo', 'adevo ina', 'adeta sio', 'adana pox', 'adito grav',
            'adito tera', 'adevo grav vis', 'adevo mas grav vis', 'adevo mas hur', 'adevo mas flam',
            'adevo grav flam', 'adevo mas grav flam', 'adori vis', 'adori frigo', 'adura gran', 
            'adori min vis', 'adana ani', 'adevo mas pox', 'adevo grav pox', 'adevo mas grav pox',
            'adevo res flam', 'adori tera', 'adori mas tera', 'adura vita', 'adevo grav vita' ];

        let druidHeal = ['exana kor', 'exana flam', 'exana pox', 'exura sio "Yakubu"', 'exura gran', 'exura',
            'exura infir', 'exura gran mas res', 'exura gran sio para', 'exura max vita', 'exura vita' ];

        let druidAtk = ['exori min flam', 'exevo infir frigo hur', 'exori vis', 'utori pox', 'exevo gran mas frigo', 'exori flam',
            'exori frigo', 'exevo frigo hur', 'exori infir tera', 'exori moe ico', 'exori gran frigo', 'exevo gran frigo hur',
            'exori gran tera', 'exori tera', 'exevo tera hur', 'exori max frigo', 'exori max tera', 'exevo gran mas tera' ];

        let druidSup = ['exana vita', 'utevo res ina "Monk"', 'exiva moe res', 'exiva "Yakubu"', 'exevo pan',
            'utevo gran lux', 'utani hur', 'utura mas sio', 'utana vid', 'exani hur "up"', 'exani hur "down"',
            'utevo lux', 'exani tera', 'utamo vita', 'utani gran hur', 'utevo res "Monk"', 'utevo gran res dru', 'utevo vis lux' ];

            //Knight
        let knightSpellsA = '';
        let knightSpellsH = '';
        let knightSpellsS = '';

        let knightAtk = ['exori gran ico', 'exori', 'exori ico', 'exori gran', 'exori min', 'exori mas', 'utori kor', 'exori hur' ];

        let knightHeal =['exura infir ico', 'exana kor', 'exana pox', 'exura med ico', 'utura gran', 'exura gran ico', 'utura', 'exura ico'];

        let knightSup =['utito tempo', 'exeta res', 'utani tempo hur', 'exeta amp res', 'exiva moe res', 'exiva "Yakubu"', 'utevo gran lux',
            'utani hur', 'exani hur "up"', 'exani hur "down"', 'utevo lux', 'exani tera', 'utamo tempo', 'utevo gran res eq', 'utito mas sio' ];

            //Paladin
        let paladinSpellsA = '';
        let paladinSpellsH = '';
        let paladinSpellsR = '';
        let paladinSpellsS = '';

        let paladinAtk = ['exevo mas san', 'exori san', 'exori con', 'utori san', 'exori gran con' ];

        let paladinHeal = ['exana mort', 'exana pox', 'exura san', 'exura gran', 'utura gran', 'exura', 'exura infir', 'utura', 'exura gran san' ];

        let paladinSup = ['exevo infir con', 'exana ina', 'exevo con', 'exevo con flam', 'exana amp res', 'exeta con', 'exiva moe res',
            'exiva "Yakubu"', 'utevo gran lux', 'utani hur', 'exani hur "up"', 'exani hur "down"', 'utevo lux', 'exani tera',
            'utamo mas sio', 'utito tempo san', 'utevo gran res sac', 'utamo tempo san' ];

        let paladinRune = ['adito grav', 'adito tera', 'adori san'];

            //Sorcerer
        let sorcererSpellsA = '';
        let sorcererSpellsH = '';
        let sorcererSpellsR = '';
        let sorcererSpellsS = '';

        let sorcererAtk = ['exori min flam', 'exori infir vis', 'utori mort', 'exori mort', 'utori vis', 'exevo vis lux', 'exori vis', 'exevo vis hur',
            'exevo flam hur', 'exori flam', 'exevo gran vis lux', 'exevo gran flam hur', 'exevo gran mas flam', 'exori frigo', 'utori flam', 'exori amp vis',
            'exevo gran mas vis', 'exevo infir flam hur', 'exori gran vis', 'exori gran flam', 'exori tera', 'exori max vis', 'exori max flam' ];

        let sorcererRune = ['adana mort', 'adito grav', 'adito tera', 'adevo mas vis', 'adevo grav vis', 'adevo mas grav vis', 'adevo mas hur', 'adevo mas flam',
            'adevo grav flam', 'adevo mas grav flam', 'adori flam', 'adori mas flam', 'adori vis', 'adori min vis', 'adevo grav tera', 'adevo grav pox',
            'adevo mas grav pox', 'adevo res flam', 'adori tera', 'adori gran mort', 'adori mas vis' ];

        let sorcererSup = ['exana vita', 'exevo gran mort', 'utevo res ina "Monk"', 'utori mas sio', 'exori moe', 'exiva moe res', 'exiva "Yakubu"', 'utevo gran lux',
            'utani hur', 'utana vid', 'exani hur "up"', 'exani hur "down"', 'utevo lux', 'exani tera', 'utamo vita', 'exori kor', 'utani gran hur', 
            'utevo res "Monk"', 'utevo gran res ven', 'utevo vis lux' ];

        let sorcererHeal = ['exana pox', 'exura gran', 'exura', 'exura infir', 'exura max vita', 'exura vita' ];

