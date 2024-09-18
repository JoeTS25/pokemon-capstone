function SuperEff(data) {
    if (data === 'fire') {
        return ("Super Effective Against: Grass, Bug, Steel, Ice")
    }

    if (data === 'water') {
        return ("Super Effective Against: Fire, Ground, Rock")
    }

    if (data === 'electric') {
        return ("Super Effective Against: Water, Flying")
    }

    if (data === 'grass') {
        return ("Super Effective Against: Water, Ground, Rock")
    }

    if (data === 'ice') {
        return ("Super Effective Against: Grass, Ground, Flying, Dragon")
    }

    if (data === 'fighting') {
        return ("Super Effective Against: Normal, Ice, Rock, Dark, Steel")
    }

    if (data === 'poison') {
        return ("Super Effective Against: Grass, Fairy")
    }

    if (data === 'ground') {
        return ("Super Effective Against: Fire, Electric, Poison, Rock, Steel")
    }

    if (data === 'flying') {
        return ("Super Effective Against: Grass, Fighting, Bug")
    }

    if (data === 'psychic') {
        return ("Super Effective Against: Fighting, Poison")
    }

    if (data === 'bug') {
        return ("Super Effective Against: Grass, Psychic, Dark")
    }

    if (data === 'rock') {
        return ("Super Effective Against: Fire, Ice, Flying, Bug")
    }
    
    if (data === 'ghost') {
        return ("Super Effective Against: Psychic, Ghost")
    }

    if (data === 'dragon') {
        return ("Super Effective Against: Dragon")
    }

    if (data === 'dark') {
        return ("Super Effective Against: Psychic, Ghost")
    }

    if (data === 'steel') {
        return ("Super Effective Against: Ice, Rock, Fairy")
    }

    if (data === 'fairy') {
        return ("Super Effective Against: Fighting, Dragon, Dark")
    }
}

export default SuperEff;