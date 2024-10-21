import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomeSection1 from "./components/HomeSection1";

function App() {
  return (
    <main className="container">
      <Nav />
      <HomeSection1 />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
