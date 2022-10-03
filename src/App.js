import "./App.css";
import { Route, Routes } from "react-router-dom";
import Loginpage from "./pages/Loginpage";
import Agreepage from "./pages/Agreepage";
import Mainpage from "./pages/Mainpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/agree" element={<Agreepage />} />
        <Route path="/" element={<Mainpage />} />
      </Routes>
    </>
  );
}

export default App;
