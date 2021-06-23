import './App.scss';

import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import Statistics from '../Statistics/Statistics';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
