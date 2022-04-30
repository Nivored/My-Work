let healthbar1= 100;
let healthbar2= 100;
let atk = '';
let dataInfo = '';
let audio = new Audio('Battle.mp3');
let verry = '';
let timer = 1000;
let newPokemon = 'Char.gif';
let verryFirst = 'lycan.gif';
let chosenPokemon = 0;
let nextPokemon = 0 ;

let listofPokemon =[
    {name: "Charizard",
    gif: "Char.gif",
    // health:200,
    attacks:[
        {name:"Fire Punch", damage: 10},
        {name:"Earthquake", damage: 60},
        {name:"Dragon Claw", damage: 30},
        {name:"Flamethrower", damage: 20},
     ] 
    },
    {name: "Gengar", 
    gif:"Gengar.gif", 
    attacks:[
        {name:"Shadow Ball", damage: 30},
        {name:"Sucker Punch", damage: 30},
        {name:"Psychic", damage: 30},
        {name:"Sludge Bomb", damage: 30},] 
    },
]

let verryPokemon = [
    {name: "Lycanrock", 
    gif: "lycan.gif" ,
    attacks:[
        {name:"Rock Throw", damage: 30},
        {name:"Crunch", damage: 30},
        {name:"Earthquake", damage: 30},
        {name:"Brick Break", damage: 30},
    ]},

    {name: "Pikachu",
    gif: "Pika.gif",
    attacks:[
        {name:"Thunderbolt", damage: 30},
        {name:"Iron Tail", damage: 30},
        {name:"Dig", damage: 30},
        {name:"Thunder", damage: 30},
    ]},
]
