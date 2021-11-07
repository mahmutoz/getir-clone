import Campaigns from './components/Campaigns';
import Cards from './components/Cards';
import Categories from './components/Categories';
import Favourites from './components/Favourites';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Header from './components/Header';
import MobileApp from './components/MobileApp';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Categories />
      <Campaigns />
      <div className="container mx-auto">
        <Favourites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
