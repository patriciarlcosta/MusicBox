
import { useState } from "react";

function MusicCard({ musica }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="card">
      <h3>{musica.titulo}</h3>
      <p>{musica.artista}</p>

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Esconder detalhes" : "Ver detalhes"}
      </button>

      {mostrar && (
        <p>Género musical: {musica.genero}</p>
      )}
    </div>
  );
}

export default MusicCard;
