import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CapName from "../Hooks/Capitalize";
import "./PokePage.css";
import MoveBackground from "../Hooks/MoveBackground";
import SuperEff from "../Hooks/SuperEff";

function Move() {
    const { name } = useParams();
    const [pokeMove, setPokeMove] = useState([]);
    const currentMove = `https://pokeapi.co/api/v2/move/${name}`;
    const [isLoading, setIsLoading] = useState(true);

    async function GetMove() {
        setIsLoading(true);
        const res = await axios.get(currentMove);
        setPokeMove(move => {
            move = [...move, res.data]
            return move
        });
        setIsLoading(false);
    }

    useEffect(() => {
        GetMove();
    }, [currentMove])

    if (isLoading) return ("Page Loading...")
    
    const moveData = pokeMove[0];
    const supeffect = SuperEff(moveData.type.name);

    MoveBackground(moveData);

    return (
        <div className="pokemon-container">
            <h1 className="poke-header">{CapName(moveData.name)}</h1>
            <div className="pic-desc">
                <div className="par-links">
                    <h4 className="move-head">Type: {CapName(moveData.type.name)}</h4>
                    <p className="poke-par"> {CapName(moveData.flavor_text_entries[0].flavor_text)}</p>
                    <p className="poke-par2">{supeffect}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Move;