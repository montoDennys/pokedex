import { useLocalStorage } from "../../services/localStorage";
import { Link } from 'react-router';

export const PokemonAddCollection = ({ Pokecod, name, imgSprite, className = '' }) => {
    const [pokeCollection, saveToPokeCollection] = useLocalStorage("mycollection", []);
    const isPokeMonInCollection = pokeCollection?.find(pokemonItem => pokemonItem.code === Pokecod);

    const onClickHandler = () => {
        const newPokeItem = {
            code: Pokecod,
            name: name,
            img: imgSprite,
            url: `https://pokeapi.co/api/v2/pokemon/${Pokecod}/`,
            addedAt: new Date().toISOString()
        };
        saveToPokeCollection([...pokeCollection, newPokeItem]);
    };

    return (
        <div className={`${className}`}>
            {isPokeMonInCollection ? (
                <Link 
                    to="/my-collection"
                    className="inline-flex items-center px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-200 text-sm font-medium"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    In Collection
                </Link>
            ) : (
                <button 
                    onClick={onClickHandler}
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Add to Collection
                </button>
            )}
        </div>
    );
};