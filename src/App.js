import Nav from "./Components/Nav/Nav";
import Card from "./Components/Card/Card";

import card1 from "./Assets/images/card1.jpg";
import card2 from "./Assets/images/card2.jpg";
import card3 from "./Assets/images/card3.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <div>
        <Card img={card1} title={"Card 1"} data={"Card 1 description"} />
        <Card img={card2} title={"Card 2"} data={"Card 3 description"} />
        <Card img={card3} title={"Card 3"} data={"Card 3 description"} />
      </div>
    </div>
  );
}

export default App;
