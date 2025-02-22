import './App.css';
import marvelRivalsImage from './assets/MarvelRivalsImage.jpg'
import jeff from './assets/jefftheshark.webp'
import Card from './components/card.jsx'
import diveChar from './assets/diveChar.avif'
import BeatComp from './assets/BeatComp.jpg'
import top500 from './assets/OneAboveAll.webp'
import tierlist from './assets/tierlist.png'
import psylocke from './assets/psylocke.webp'
import metaComp from './assets/MarvelRivalsComp.webp'
import ranks from './assets/ranks.png'
import tips from  './assets/tips.avif'
import counters from './assets/counters.jpg'

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
          image={tierlist}
          title="Tier List"
          description="Tier List for all heroes"
        />
        <Card
          image={counters}
          title="Counters"
          description="A description of the card"
        />
        <Card
          image={psylocke}
          title="Recommended Heroes"
          description= "Recommended Heroes for first time players"
        />
        <Card
          image={top500}
          title="Top 500"
          description="Current top 500 players"
        />
        <Card
          image={ranks}
          title="Rank Guide"
          description="How to climb in certain ranks"
        />
        <Card
          image={tips}
          title="Tips & Tricks"
          description="Tips and tricks for the game"
        />
        <Card
          image={metaComp}
          title="Meta Comps"
          description="Current Meta Comps"
        />
        <Card
          image={jeff}
          title="Jeff Images"
          description="Images of Jeff"
        />
        <Card
          image={BeatComp}
          title="How to beat comp"
          description="Quick guide to beat comps"
        />
        <Card
          image={diveChar}
          title="Counter Dives"
          description="Quick guide to counter dives"
        />
      </div>
    </div>
  )
}

export default App
