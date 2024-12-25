import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Premium from "./components/Premium";
import PremiumTable from "./components/PremiumTable";


const App = () => {
  return (
    <>
      <header className="shadow-lg shadow-green-400 dark:bg-black">
        <Navbar></Navbar>
      </header>
      <Hero></Hero>  
      <PremiumTable></PremiumTable>
      <Premium></Premium>
    </>
        
  )
}

export default App;