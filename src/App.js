import './App.css'
import Card from './components/Card/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
import SearchBar from './components/SearchBar/SearchBar.jsx'
import characters, { Rick } from './data.js'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <h1 className='title'>Welcome to the Rick and Morty App!</h1>
      <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        />
      </div>
      <div>
        <hr className='hrBar'/>
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <div>
        <hr className='hrBar'/>
      </div>
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
    </div>
  )
}

export default App
