import { useParams } from "react-router";
import { Loading } from "../components/Loading";
import { usePokemonDetail } from '../services/pockemonapi';
import { PokemonAddCollection } from "../components/Pokemon/PokemonAddCollection";

// Moved outside component to avoid recreation on each render
const TYPE_COLORS = {
    normal: 'bg-gray-400 text-gray-800',
    fire: 'bg-red-500 text-white',
    water: 'bg-blue-500 text-white',
    electric: 'bg-yellow-400 text-gray-800',
    grass: 'bg-green-500 text-white',
    ice: 'bg-blue-200 text-gray-800',
    fighting: 'bg-red-700 text-white',
    poison: 'bg-purple-500 text-white',
    ground: 'bg-yellow-600 text-white',
    flying: 'bg-indigo-300 text-gray-800',
    psychic: 'bg-pink-500 text-white',
    bug: 'bg-green-400 text-gray-800',
    rock: 'bg-yellow-700 text-white',
    ghost: 'bg-purple-700 text-white',
    dragon: 'bg-indigo-600 text-white',
    dark: 'bg-gray-800 text-white',
    steel: 'bg-gray-500 text-white',
    fairy: 'bg-pink-300 text-gray-800',
};

const DetailSection = ({ title, children, className = '' }) => (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
        <h2 className="text-xl font-bold mb-3">{title}</h2>
        {children}
    </div>
);

const StatBar = ({ statName, value, maxValue = 255, color }) => (
    <li className="flex items-center">
        <span className="w-32 capitalize text-sm">{statName.replace('-', ' ')}:</span>
        <div className="flex-1 bg-gray-200 rounded-full h-3">
            <div 
                className={`h-3 rounded-full ${color}`} 
                style={{ width: `${Math.min(100, (value / maxValue) * 100)}%` }}
            />
        </div>
        <span className="w-10 text-right ml-2 text-sm font-medium">{value}</span>
    </li>
);

export const Details = () => {
    const { pokeid } = useParams();
    const pokemonData = usePokemonDetail(pokeid);
    
    if (!pokemonData) {
        return <Loading />;
    }

    const primaryType = pokemonData.types[0]?.type.name || 'normal';
    const primaryColor = TYPE_COLORS[primaryType] || TYPE_COLORS.normal;
    const [colorClass, ] = primaryColor.split(' ');

    return (
        <div className={`min-h-screen bg-gradient-to-b from-${colorClass.split('-')[1]}-50 to-white py-8`}>
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                    {/* Left Column - Image */}
                    <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
                        <div className="bg-white rounded-lg shadow-md p-4 w-full flex flex-col items-center">
                            <img 
                                src={pokemonData.sprites.front_default || '/pokeball.png'} 
                                alt={pokemonData.name}
                                className="w-64 h-64 object-contain"
                                onError={(e) => {
                                    e.target.src = '/pokeball.png';
                                }}
                            />
                            <span className="text-gray-500 text-sm mt-2">
                                #{pokemonData.id.toString().padStart(3, '0')}
                            </span>
                        </div>
                        
                        <PokemonAddCollection
                            Pokecod={pokeid}
                            imgSprite={pokemonData.sprites.front_default}
                            name={pokemonData.name}
                            url=''
                            className="w-full"
                        />
                    </div>

                    {/* Right Column - Details */}
                    <div className="w-full md:w-2/3 space-y-6">
                        <DetailSection>
                            <h1 className="text-3xl font-bold capitalize mb-2">
                                {pokemonData.name}
                            </h1>
                            <div className="flex gap-2 mb-4">
                                {pokemonData.types.map((type) => (
                                    <span 
                                        key={type.type.name}
                                        className={`px-3 py-1 rounded-full text-sm capitalize ${TYPE_COLORS[type.type.name] || TYPE_COLORS.normal}`}
                                    >
                                        {type.type.name}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <h3 className="font-semibold">Height</h3>
                                    <p>{(pokemonData.height / 10).toFixed(1)} m</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Weight</h3>
                                    <p>{(pokemonData.weight / 10).toFixed(1)} kg</p>
                                </div>
                            </div>
                        </DetailSection>

                        <DetailSection title="Abilities">
                            <div className="flex flex-wrap gap-2">
                                {pokemonData.abilities.map((ability) => (
                                    <span 
                                        key={ability.ability.name}
                                        className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize"
                                    >
                                        {ability.ability.name.replace('-', ' ')}
                                        {ability.is_hidden && ' (hidden)'}
                                    </span>
                                ))}
                            </div>
                        </DetailSection>
                    </div>
                </div>

                {/* Bottom Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <DetailSection title="Base Stats">
                        <ul className="space-y-3">
                            {pokemonData.stats.map((stat) => (
                                <StatBar 
                                    key={stat.stat.name}
                                    statName={stat.stat.name}
                                    value={stat.base_stat}
                                    color={colorClass}
                                />
                            ))}
                            <li className="flex items-center pt-2 mt-2 border-t border-gray-100">
                                <span className="w-32 capitalize text-sm font-medium">Total:</span>
                                <span className="font-medium">
                                    {pokemonData.stats.reduce((sum, stat) => sum + stat.base_stat, 0)}
                                </span>
                            </li>
                        </ul>
                    </DetailSection>

                    <DetailSection title="Moves">
                        <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto p-1">
                            {pokemonData.moves.map((move) => (
                                <span
                                    key={move.move.name}
                                    className="px-3 py-1 bg-gray-100 rounded-full text-sm capitalize"
                                >
                                    {move.move.name.replace('-', ' ')}
                                </span>
                            ))}
                        </div>
                    </DetailSection>
                </div>
            </div>
        </div>
    );
};