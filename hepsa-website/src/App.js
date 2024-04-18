import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import CarouselBootstrap from './components/CarouselBootstrap';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Header2 from './components/Header2';
import Hero2 from './components/Hero2';


function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header2 />
      {/* <CarouselBootstrap /> */}
      <Hero2 />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
