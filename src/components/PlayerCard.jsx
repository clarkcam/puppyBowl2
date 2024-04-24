import { useNavigate } from "react-router-dom";

export default function PlayerCard({player}) {

    const navigate = useNavigate();

    function detailsClick() {
        navigate(`/singleplayer/${player.id}`);
    }

    async function deleteClick() {
        navigate(`/deleteplayer/${player.id}`);
    }

    return (
        <div className="playerCard max-w-sm rounded overflow-hidden shadow-lg">
            
            <img className="w-full" src={player.imageUrl} alt={player.name} />
            <h2 className="p-5 font-bold text-2xl mb-2" >{player.name}</h2>
            <div className="pl-5 text-gray-700 text-base">
                <h2 className="text-2xl font-bold">Player Info</h2>
                <p>Breed: {player.breed}</p>
            </div>
            <div  className="buttons p-2 flex flex-row-reverse space-x-4 space-x-reverse">
            <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600" id={`remove ${player.id}`} onClick={deleteClick}>Remove Player</button>
            <button className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600" id={`Details ${player.id}`} onClick={detailsClick}>See Details</button>
            </div>
        </div>
    )
}