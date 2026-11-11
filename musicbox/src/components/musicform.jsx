
import { useState } from "react";

function MusicForm({ onAdd }) {
  const [titulo, setTitulo] = useState("");
  const [artista, setArtista] = useState("");
  const [genero, setGenero] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!titulo || !artista || !genero) return;

    onAdd({ titulo, artista, genero });

    setTitulo("");
    setArtista("");
    setGenero("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nome da música"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />

      <input
        placeholder="Nome do artista"
        value={artista}
        onChange={(e) => setArtista(e.target.value)}
        required
      />

      <input
        placeholder="Género musical"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
        required
      />

      <button type="submit">Adicionar música</button>
    </form>
  );
}

export default MusicForm;
