


export default function SearchBar({setSearch}){

    function handleChange(e){
        console.log(e.target.value);

        setSearch(e.target.value);
    }

    return (
        <div className="navBar">
            <form className="flex items-center max-w-sm mx-auto">   
                <label className="sr-only">Search</label>
                    <div className="relative w-full">
                        
                        <input type="text" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search for a player..." required />
                    </div>
            </form>
    </div>
        
    )
}