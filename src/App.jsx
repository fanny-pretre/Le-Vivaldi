import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="container">
      <Nav />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
