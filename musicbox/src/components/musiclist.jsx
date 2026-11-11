
import MusicCard from "./musiccard";

function MusicList({ musicas }) {
  return (
    <div>
      {musicas.map((musica) => (
        <MusicCard key={musica.id} musica={musica} />
      ))}
    </div>
  );
}

export default MusicList;
