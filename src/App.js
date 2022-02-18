
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";




function App() {
  
  return (
    <div className="App">
      <section className="App-content">
       <h1>app</h1>
       <Link to='/gif/mikasa'>Gif de Shingeki No Kyojin</Link>
       <Link to='/gif/naruto'>Gif de Naruto</Link>
       <Link to='/gif/goku'>Gif de Goku</Link>
       <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;

// u6K3vvRYVxR5Am2CZD6FiFioMZ5JYk2y apikey