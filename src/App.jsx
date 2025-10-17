import BottomNavbar from "./Components/BottomNavbar";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar/>
      <Outlet />
      <BottomNavbar />
    </>
  );
}

export default App;
