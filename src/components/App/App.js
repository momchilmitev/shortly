import './App.scss';

import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import UrlInput from "../UrlInput/UrlInput";
import Statistics from '../Statistics/Statistics';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
        <UrlInput />
      <Statistics />
      <Footer />
    </div>
  );
}

export default App;
