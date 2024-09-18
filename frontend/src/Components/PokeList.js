import React from "react";
import { Link } from "react-router-dom";
import "./PokeList.css";
import CapName from "../Hooks/Capitalize";

function PokeList({ pokemon }) {
    return (
        <div className="container">
            {pokemon.map(p => (
                    <div className="poke-div" key={p.name}>
                        <Link className="link-class" to={`/pokemon/${p.name.toLowerCase()}`}>{CapName(p.name)}</Link>
                        <img className="sprite" src={p.sprites.front_default} alt=""/>
                    </div>
                    
            ))}
            
        </div>
    )
    
}

export default PokeList;