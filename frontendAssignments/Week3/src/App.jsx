import { artists } from './components/best-selling-music-artists';
import ArtistDetails from './components/ArtistDetails'

function App() {

  return (
    <div className="app">
        <h1 className="bestSelling">Best-Selling music artists</h1>
        <div className="artist-list">
        {/* this stuff right here goes through the artists array and render ArtistDetails for each artist */}
        {artists.map((artist, index) => (
          <ArtistDetails key={index} artist={artist} />
        ))}
      </div>
    </div>
  );
}

export default App;
