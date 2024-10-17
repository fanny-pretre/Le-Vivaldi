import Automne from "../assets/cuisineautomne.jpg";

import HomeSection2 from "../components/HomeSection2";
import HomeSection3 from "../components/HomeSection3";
import HomeSection4 from "../components/HomeSection4";
import HomeSection5 from "../components/HomeSection5";

function Home() {
  return (
    <>
      <section className="home-section">
        <img className="home-header-image" src={Automne} alt="Automne" />
        <h1 className="home-header-title">
          {" "}
          La cuisine d&apos;automne est arrivée !{" "}
        </h1>
      </section>
      <HomeSection2 />
      <HomeSection3 />
      <HomeSection4 />
      <HomeSection5 />
    </>
  );
}

export default Home;
