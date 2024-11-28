import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import {heroData } from "./static/index";

import "./components/sass/App.scss";


function App() {
  return (
    <>
      <Header />
      <div className="app__hero">
        {heroData.map((data, index) => (
          <Hero key={index} {...data} />
        ))}
      </div>
    </>
  );
}

export default App;
