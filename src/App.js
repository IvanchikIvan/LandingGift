import './App.css';
import './reset.css'
import Header from './components/Header/Header'
import Memories from './components/Memories/Memories';
import Gallery from './components/Galery/Galery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Memories/>
      <Gallery/>
    </div>
  );
}

export default App;
