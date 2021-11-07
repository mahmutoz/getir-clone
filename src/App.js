import Campaigns from './components/Campaigns';
import Cards from './components/Cards';
import Categories from './components/Categories';
import Favorites from './components/Favorites';
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
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;
