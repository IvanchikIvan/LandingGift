import './App.css';
import './reset.css'
import Header from './components/Header/Header'
import Memories from './components/Memories/Memories';
import Carousel from './components/Galery/Galery';
import IWGTC from './components/i-was-glad-to-come/i-was-glad-to-come';
import Thankyou from './components/thank_you/thank-you';

function App() {
  return (
    <div className="App">
      <Header/>
      <Memories/>
      <IWGTC/>
      <Thankyou/>
      <Carousel/>
    </div>
  );
}

export default App;
