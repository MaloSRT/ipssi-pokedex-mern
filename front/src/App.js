import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokédex</h1>
        <input type="text" placeholder="Rechercher un Pokémon" />
        <button>Rechercher</button>
        <div class="langs">
          <button id="en">🇬🇧</button>
          <button id="fr">🇫🇷</button>
          <button id="cn">🇨🇳</button>
          <button id="ja">🇯🇵</button>
        </div>
      </header>
    </div>
  );
}

export default App;
