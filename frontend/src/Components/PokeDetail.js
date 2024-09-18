import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CapName from "../Hooks/Capitalize";
import BackGroundTest from "../Hooks/Background";
import "./PokePage.css";



function PokeDetail() {
    const {name} = useParams();
    const [pokemonData, setPokemonData] = useState([]);
    const [pokeSpecies, setPokeSpecies] = useState([]);
    const [dex, setDex] = useState([]);
    const currentPoke =`https://pokeapi.co/api/v2/pokemon/${name}`;
    const currentSpecies = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    const currentDex = `https://pokeapi.co/api/v2/pokemon-species/${name}`;
    const [isLoading, setIsLoading] = useState(true);
    
    /* async functions to get data to use in useEffects */
    async function GetPoke() {
        setIsLoading(true);
        const res = await axios.get(currentPoke);
        setPokemonData(poke => {
            poke = [...poke, res.data]
            return poke
        });
        setIsLoading(false);
    }

    async function GetDex() {
        setIsLoading(true);
        const res = await axios.get(currentDex);
        setDex(poke => {
            poke = [...poke, res.data]
            return poke
        });
        setIsLoading(false);
    }

    async function GetSpecies() {
        setIsLoading(true);
        const res = await axios.get(currentSpecies);
        setPokeSpecies(poke => {
            poke = [...poke, res.data]
            return poke
        });
        setIsLoading(false);
    }


    /* The useEffect section */
    
    useEffect(() => {
        GetPoke();
    }, [currentPoke])

    useEffect(() => {
        GetDex();
    }, [currentDex])

    useEffect(() => {
        GetSpecies();
    }, [currentSpecies])

    
    if (isLoading) return ("Page Loading...")
    
    /* Section of consts after the useEffects have taken place */
    const pokeData = pokemonData[0];
    const dexData = dex[0];
    const speciesData = pokeSpecies[0];
    const pokeName = pokeData.name;
    const stringHeight = pokeData.height.toString();
    const stringWeight = pokeData.weight.toString();
    const propHeight = stringHeight.slice(0, -1) +"."+stringHeight.slice(-1);
    const propWeight = stringWeight.slice(0, -1) +"."+stringWeight.slice(-1);
    
    
    
    BackGroundTest(pokeData);
    
    
    

    

    return (
        <div className="pokemon-container">
            <h1 className="poke-header">No. {pokeData.id}: {CapName(pokeName)}</h1>
            <div className="pic-desc">
                <div className="poke-picture">
               <img className="poke-sprite" src={pokeData.sprites.front_default} alt=""/>
                </div>   
                <div className="par-links">
                <h3 className="height-weight">Height: {propHeight}m</h3>
                <h3 className="height-weight">Weight: {propWeight}kg</h3> 
               <p className="poke-par"> {dexData.flavor_text_entries[0].flavor_text}</p>
                </div>
            </div>
            
        </div>
    )
}

export default PokeDetail;