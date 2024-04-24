const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT"
// const APIURL = "https://fsa-puppy-bowl.herokuapp.com/api/2401-ftb-et-web-pt"

export async function fetchAllPlayers(){
    try {
        const response = await fetch(`${APIURL}/players`);
        const json = await response.json();

        if(json.success) {
            return json.data.players;
        }

    } catch(error) {
        console.error("Error Fetching Players", error);
    }

}

export async function fetchSinglePlayer(id){
    try {
        const response = await fetch(`${APIURL}/players/${id}`);
        const json = await response.json();

        if(json.success) {
            return json.data.player;
        }

    } catch(error) {
        console.error("Error Fetching Player", error);
    }

}

export async function addNewPlayer(player){
    
    try {
        const response = await fetch(`${APIURL}/players/`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: player.name,
                breed: player.breed,
                imageUrl: player.imageUrl,
              }),
            }
        );

        const json = await response.json();

        if(json.success) {
            return json.data.players;
        }

    } catch(error) {
        console.error("Error Adding Player", error);
    }

}

export async function deletePlayer(playerId){
    
    try {
        const response = await fetch(
            `${APIURL}/players/${playerId}`,
            {
              method: 'DELETE',
            }
          );

        const json = await response.json();
        
        if(json.success){
            console.log("Player Successfully Deleted");
        }

    } catch(error) {
        console.error("Error Deleting Player", error);
    }

}

