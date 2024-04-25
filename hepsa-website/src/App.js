import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Header2 from './components/Header2';
import Hero2 from './components/Hero2';
import SimpleSlider from './components/SlickSlider';


function App() {
  return (
    <div className="App">
      <Header2 />
      <Hero2 />
      <About />
      <SimpleSlider />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
