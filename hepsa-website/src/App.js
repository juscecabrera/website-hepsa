import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import CarouselBootstrap from './components/CarouselBootstrap';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Header2 from './components/Header2';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header2 />
      <CarouselBootstrap />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
