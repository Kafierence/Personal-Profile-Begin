import './App.css';
import Experiences from './Components/Experiences/Experiences';
import Footer from './Components/Footer/Footer';
import Intro from './Components/IntroBanner/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Intro />
      <Services />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
