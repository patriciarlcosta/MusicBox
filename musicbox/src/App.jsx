import { useState } from "react";
import MusicList from "./components/musiclist";
import MusicForm from "./components/musicform";
import "./App.css";

function App() {
  const [musicas, setMusicas] = useState([
    { id: 1, titulo: "Música 1", artista: "Artista 1", genero: "Pop" },
    { id: 2, titulo: "Música 2", artista: "Artista 2", genero: "Rock" }
  ]);

  function adicionarMusica(novaMusica) {
    setMusicas([...musicas, { ...novaMusica, id: Date.now() }]);
  }

  return (
    <div className="container">
      <h1>MusicBox</h1>
      <p>A tua biblioteca musical</p>

      <h2>Lista de músicas</h2>

      <MusicList musicas={musicas} />

      <h2>Adicionar música</h2>

      <MusicForm onAdd={adicionarMusica} />
    </div>
  );
}

export default App;