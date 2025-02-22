import './App.css';
import marvelRivalsImage from './assets/MarvelRivalsImage.jpg'
import jeff from './assets/jefftheshark.webp'
import Card from './components/card.jsx'

const App = () => {

  return (
    <div className="App">
      <header className = "header">
        <img src={marvelRivalsImage} alt="Marvel Rivals" />
      </header>
      <h1>Marvel Rivals Recommender</h1>
      <h2>Marvel Rivals stuff to look at</h2>
      <div className = "card-container">
        <Card
          image={jeff}
          title="Tier List"
          description="A description of the card"
        />
        <Card
          image={jeff}
          title="Tier List"
          description="A description of the card"
        />
        <Card
          image={jeff}
          title="Tier List"
          description="A description of the card"
        />
        <Card
          image={jeff}
          title="Tier List"
          description="A description of the card"
        />
        <Card
          image={jeff}
          title="Tier List"
          description="A description of the card"
        />
        <Card
          image={jeff}
          title="Tier List"
          description="A description of the card"
        />
        <Card
          image={jeff}
          title="Tier List"
          description="A description of the card"
        />
        <Card
          image={jeff}
          title="Tier List"
          description="A description of the card"
        />
        <Card
          image={jeff}
          title="Tier List"
          description="A description of the card"
        />
        <Card
          image={jeff}
          title="Tier List"
          description="A description of the card"
        />
      </div>
    </div>
  )
}

export default App
