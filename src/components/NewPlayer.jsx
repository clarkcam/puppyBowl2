import {useState} from 'react';
import { addNewPlayer } from '../API/index';
import { useNavigate } from 'react-router-dom';

export default function NewPlayer() {
    const [name, setName] = useState();
    const [breed, setBreed] = useState();
    const [url, setUrl] = useState()

    const navigate = useNavigate()

    function handleName(event) {
        setName(event.target.value)
    }
    function handleBreed(event) {
        setBreed(event.target.value)
    }
    function handleUrl(event) {
        setUrl(event.target.value)
    }

    async function handleSubmit(event){
        event.preventDefault();

        const tempPlayer = {
            name: name,
            breed: breed,
            imageUrl: url,
        };

        await addNewPlayer(tempPlayer);

        navigate('/');                

    }


    
    return (
            <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
                <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900'>New Player Form</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Add a new puppy to play in the Puppy Bowl!</p>
            
                <form className="space-y-8">
                    <label className='block mb-2 text-sm font-medium text-gray-900'>Player Name:
                    <input name="name" onChange={handleName} className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'></input></label>
                    
                    <label className='block mb-2 text-sm font-medium text-gray-900'>Player Breed:
                    <input name="breed" onChange={handleBreed} className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'></input></label>
                    
                    <label className='block mb-2 text-sm font-medium text-gray-900'>Image URL:
                    <input name="imageURL" onChange={handleUrl} className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5'></input></label>
                    
                    <div className="p-2 flex flex-row-reverse space-x-4 space-x-reverse">
                        <button type="submit" onClick={handleSubmit} className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600">Add Player</button>
                    </div>
            </form>
            </div>
    )
}