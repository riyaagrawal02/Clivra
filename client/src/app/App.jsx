import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <Outlet />
      </main>
    </>
  );
};

export default App;
