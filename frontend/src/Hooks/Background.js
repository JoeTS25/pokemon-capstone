function BackGroundTest(data) {
    const pokeType = data.types[0].type.name;
    const pokeTypes = {
    "grass": "https://staticg.sportskeeda.com/editor/2021/04/9fe81-16173036977561-800.jpg",
    "normal" : "https://pokemongohub.net/wp-content/uploads/2019/05/Normal-Types.jpg",
    "fighting" : "https://i.pinimg.com/736x/1a/73/1d/1a731dfeef1583caabefb12af75c621d.jpg",
    "flying" : "https://i.redd.it/lhahy3f1hwgz.jpg",
    "poison" : "https://pokemongohub.net/wp-content/uploads/2019/01/Poison-Types.jpg",
    "ground" : "https://pokemongohub.net/wp-content/uploads/2019/01/Ground-Types.jpg",
    "rock" : "https://pogo.gamepress.gg/sites/default/files/2020-07/RockOG_0.png",
    "bug" : "https://pokemongohub.net/wp-content/uploads/2019/01/Bug-Types.jpg",
    "ghost" : "https://pm1.aminoapps.com/7243/1932c3243860328e1f1cd07d65e02649672380ecr1-700-444v2_hq.jpg",
    "steel" : "https://i.ytimg.com/vi/IK9TxCgn7IM/maxresdefault.jpg",
    "fire" : "https://pogo.gamepress.gg/sites/default/files/2020-10/fireOG_0.png",
    "water" : "https://pokemongohub.net/wp-content/uploads/2019/01/Water-Types.jpg",
    "electric" : "https://pokemongohub.net/wp-content/uploads/2019/01/Electric-Types.jpg",
    "psychic" : "https://pm1.aminoapps.com/7243/19a53b46a48f55a346f130092cb2c8d8fcf88af0r1-642-671v2_hq.jpg",
    "ice" : "https://pm1.aminoapps.com/7243/fc715e840930cac4f0577c69aa6721ff0b689b11r1-677-462v2_hq.jpg",
    "dragon" : "https://pokemongohub.net/wp-content/uploads/2019/01/Dragon-Types-1.jpg",
    "dark" : "https://pm1.aminoapps.com/7243/0ea89cf278223e13003a6897d3091b7d99271cf6r1-688-475v2_hq.jpg",
    "fairy" : "https://pokemongohub.net/wp-content/uploads/2019/02/Fairy-Types-1024x576.jpg", 
    }
    

    

    
        return document.body.style.background = `url(${pokeTypes[pokeType]})`
    
    
}
export default BackGroundTest;