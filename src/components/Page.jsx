import { NavBar } from "./Navbar"

export const Page = ( {title, children} ) => {
    return (
        <>
            <header className="bg-blue-500 text-white py-2 px-4">
                <div className="text-lg text-center font-semibold">{title}</div>
                <NavBar />
            </header>
            <main className="grow bg-gray-100">
                {children}
            </main>
            <footer className="bg-blue-500 text-white text-center py-4">
                © 2025 Pokedex
            </footer>
        </>
    )
}