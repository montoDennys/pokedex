import { NavLink } from 'react-router';

export const NavBar = () => {
    return (
        <nav className="bg-blue-500 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Pokedex</h1>
                <ul className="flex space-x-6">
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `text-lg font-medium hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-300' : ''}`
                            }
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/my-collection" 
                            className={({ isActive }) => 
                                `text-lg font-medium hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-300' : ''}`
                            }
                        >
                            My Collection
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => 
                                `text-lg font-medium hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-300' : ''}`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};