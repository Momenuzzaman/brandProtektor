
import './App.css';
import CompanyCard from './components/companyCard/CompanyCard';
import DentalImplants from './components/DentalImplants/DentalImplants';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ProtekterWork from './components/ProtekterWork/ProtekterWork';


function App() {
  return (
    <div className="App">
      <Header />
      <DentalImplants />
      <CompanyCard />
      <ProtekterWork />
      <Footer />
    </div>
  );
}

export default App;
