import { useNavigate, useParams} from "react-router-dom";
import { useEffect } from 'react';
import {deletePlayer} from '../API/index';

export default function DeletePage() {
    const navigate = useNavigate();
    const { playerId } = useParams();
    
    useEffect(()=> {
        async function removePlayer(){
            console.log("deleting player ", playerId);
            await deletePlayer(playerId);
            
        }

        removePlayer();
        setTimeout(() => {navigate('/')}, 3000);
        
    },[]); 
    
    return(
        <h2>Deleting Player...</h2>
    )

}