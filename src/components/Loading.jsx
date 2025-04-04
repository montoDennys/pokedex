export const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-bounce">
                <div className="w-12 h-12 rounded-full border-4 border-gray-800 relative">
                    <div className="absolute top-0 left-0 right-0 h-1/2 bg-red-500 rounded-t-full"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white rounded-b-full"></div>
                    <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800"></div>
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
            </div>
        </div>
    );
};