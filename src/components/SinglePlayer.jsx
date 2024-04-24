import { useEffect, useState } from 'react';
import { fetchSinglePlayer } from "../API/index";
import { useParams } from "react-router-dom";
import DetailedPlayerCard from "./DetailedPlayerCard";


export default function SinglePlayer() {

    const {playerId} = useParams();
    const [player, setPlayer] = useState(null);
    
    useEffect(()=> {
        async function fetchPlayer(){
            console.log("set player using fetchSinglePlayer");
            let newPlayer = await fetchSinglePlayer(playerId);
            setPlayer(newPlayer);
        }

        fetchPlayer();
    },[]);  

    if(player){ 
        return (
            <div className="mt-10 grid grid-cols-3 gap-4 px-10">
                <DetailedPlayerCard player={player} />
            </div>
        )
    }
    return <h2>Loading Details</h2>
}