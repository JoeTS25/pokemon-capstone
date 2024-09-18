function CapName(pokemonName) {
    const firstLetter = pokemonName.charAt(0);
    const firstCap = firstLetter.toUpperCase();
    const remaining = pokemonName.slice(1);
    return firstCap + remaining;
}

export default CapName;