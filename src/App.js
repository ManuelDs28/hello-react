import "./App.css";
import Header from "./components/Header";




const arrayOfCards = [
  {
    image: "../../../images/icon1.png",
    title: "Declarative",
    description: "React makes it painless to create interactive UIs",
  },
  {
    image: "../../../images/icon2.png",
    title: "Components",
    description: "Build encapsulated components that manage their state.",
  },
  {
    image: "../../../images/icon3.png",
    title: "Single-Way",
    description: "A set of immutable values are passed to the component's.",
  },
  {
    image: "../../../images/icon4.png",
    title: "JSX",
    description: "Statically-typed designed to run on modern browsers.",
  },
];
const InfoCard = (props) => {
  return (
    <div className="info-card">
      <img src={props.card.image} alt={props.card.title} />
      <h2>{props.card.title}</h2>
      <p>{props.card.description}</p>
      
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <Header />
      <div className="info-home">
        <h1 className="title">Say Hello to ReactJS</h1>
        <p className="paragraph">
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </p>
        <button className="button">Awesome!</button>
      </div>
      <div className="cards">
      {arrayOfCards.map((mappedCard) => (
        <InfoCard card={mappedCard} key={mappedCard.image} />
      ))}
    </div>
      
    </div>
  );
}

export default App;
