import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import CarouselBootstrap from './components/CarouselBootstrap';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <CarouselBootstrap />
      <Footer />
    </div>
  );
}

export default App;
