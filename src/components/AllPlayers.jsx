
import { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import { fetchAllPlayers } from "../API/index";
import SearchBar from './SearchBar';

export default function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchPlayers() {
            setPlayers(await fetchAllPlayers());
        }

        fetchPlayers();
    },[]);

    useEffect(() => {
        const workingPlayers = players.filter(player => {
           return player.name.toLowerCase().includes(search.toLowerCase());
        });

        setFilteredPlayers(workingPlayers);

    },[search]);
    

    return (
        <>
            <SearchBar setSearch={setSearch} />
            
            <div className="mt-10 grid grid-cols-3 gap-4 px-10">
                {search ?        
                    filteredPlayers.map((player) => {
                                return <PlayerCard key={player.id} player={player} />;
                            })
                    :
                    players.map((player) => {
                                return <PlayerCard key={player.id} player={player} />;
                            })
                }
            </div>
        </>
    )
}