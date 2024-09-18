import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RandomButton from "./RandomButton";
import CapName from "../Hooks/Capitalize";

function Partner({ currentUser }) {
   const randAtt = Math.floor(Math.random() * 11);
   const [randomId, setRandomId] = useState([randAtt]);
   const pokeId = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
   const [currentPoke, setCurrentPoke] = useState([]);
   const [nextPoke, setNextPoke] = useState();
   const [nextAtt, setNextAtt] = useState();
   const [newDivOne, setnewDivOne] = useState();
   const [newDivTwo, setNewDivTwo] = useState();
   const [newPic, setNewPic] = useState();
   const [pokeLink, setPokeLink] = useState();
   const [moveLink, setMoveLink] = useState();
   const [isLoading, setIsLoading] = useState(true);
   
   async function GetPoke() {
    setIsLoading(true);
    const res = await axios.get(pokeId);
    setCurrentPoke(poke => {
            poke = [...poke, res.data]
            return poke
        });
    setNextPoke(Math.floor(Math.random() * 1026));
    setNextAtt(Math.floor(Math.random() * 11));
    setIsLoading(false);
   };
   

   useEffect(() => {
    GetPoke();
   }, [pokeId]);

   const pokeData = currentPoke[0];

   function handleClick(evt) {
    evt.preventDefault();
    setCurrentPoke([]);
    setRandomId(nextPoke);
    setNextAtt(Math.floor(Math.random() * 21));
    
    setnewDivOne(
        `${currentUser.username} sent out a`
    )
    
    setPokeLink(
        CapName(pokeData.name)
    )
    
    setNewDivTwo(
        `${CapName(pokeData.name)} used ${CapName(pokeData.moves[nextAtt].move.name)}`
    )
    
    setNewPic(pokeData.sprites.front_default)

    setMoveLink(`/move/${pokeData.moves[nextAtt].move.name}`)

  }

  



   if (isLoading) return ("Loading...");


   return(
    <div className="poke-p">
        <div className="battle">
            <div className="p1-div">
                <p className="p1">{newDivOne} {pokeLink}</p>
            </div>
            <div className="img-div"><img src={newPic} alt="" className="img-1"/></div>
            <div className="p2-div">
                <p className="p2">{newDivTwo}</p>
            </div>
        </div>
        <div className="link-div">
        <Link to={moveLink} className="move-link">Attack Info</Link>
        </div>
        <RandomButton handleClick={handleClick}/>
        
    </div>
   )

}

export default Partner;