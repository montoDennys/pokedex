export const PokemonListItem = (
    {
        code,
        name,
        imgSprite = 'https://picsum.photos/id/2/48/48',
        onClickHandler = () => {}
    }
) => {
    return (
        <div className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <img 
                src={imgSprite} 
                alt={name} 
                className="w-16 h-16 object-contain rounded-full border-2 border-yellow-400"
            />
            <div className="ml-4 flex-1">
                <strong className="text-lg font-bold capitalize text-gray-800">
                    {name}
                </strong>
                <p className="text-sm text-gray-500">Código: #{code}</p>
            </div>
            <button 
                onClick={() => { onClickHandler(code); }} 
                className="bg-yellow-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
                Ver Detalle
            </button>
        </div>
    );
}