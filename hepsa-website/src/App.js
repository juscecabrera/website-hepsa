import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import CarouselBootstrap from './components/CarouselBootstrap';
import Footer from './components/Footer';
import Content from './components/Content';
import Products from './components/Products';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <CarouselBootstrap />
      <Content />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
