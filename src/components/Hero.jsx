const Hero = () => {
    return (
        <div className="px-16 dark:bg-black flex dark:text-green-700 flex-col h-[70vh] justify-center items-center">
            <h1 className="font-bold text-5xl">Stream Your Favourite Music</h1>
            <h1 className="font-bold text-5xl">Anytime, Anywhere with Spotify</h1>
            <p className="font-medium dark:text-white mt-4">Get instant access to millions of songs and podcasts, personalised just for you.</p>
            <button className="bg-green-700 font-medium border rounded-lg border-green-700 text-white px-7 py-2 my-4">Start Steaming Now</button>
        </div>
    )
}

export default Hero;