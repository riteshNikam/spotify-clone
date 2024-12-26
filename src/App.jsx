import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LogInPage from "./components/LogInPage";

const App = () => {
  return (
    <>
      <header className="dark:bg-black">
        <Navbar></Navbar>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/login" element={<LogInPage></LogInPage>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
