import { NavBar } from "./Navbar"

export const Page = ( {title, children} )=>{
    return (
        <>
            <header className="bg-black text-white py-2 px-4">
                <div className="text-lg text-center">{title}</div>
                <NavBar />
            </header>
            <main className="grow">
                 {children}
            </main>
            <footer className="p-4">
                202501
            </footer>
        </>
    )
}