import { Outlet } from "react-router-dom";

import Nav from "./components/Nav";

function App() {
  return (
    <main className="container">
      <Nav />
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
