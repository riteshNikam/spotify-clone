import SpotifyWhite from "../assets/Spotify_White.png";

const Navbar = () => {
    return (
        <div className="dark:text-white dark:bg-black">
            <nav className="bg-white mx-16 h-20 items-center dark:bg-black flex flex-row justify-between">
                <div className="flex flex-row items-center">
                    <img src={SpotifyWhite} alt="" className="h-10 mr-2"/>
                    <a className="text-2xl font-bold">Spotify</a>
                </div>
                <div className="flex flex-row">
                    <a className="mx-4 font-semibold">Premium</a>
                    <a className="mx-4 font-semibold">Support</a>
                    <a className="mx-4 font-semibold">Download</a>
                    <a className="mx-4 font-semibold">|</a>
                    <a className="mx-4 font-semibold">Sign up</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;