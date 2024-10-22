import { Outlet } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer";
import DynamicHomeSection from "./components/DynamicHomeSection";

function App() {
  return (
    <main className="container">
      <Nav />
      <DynamicHomeSection />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
