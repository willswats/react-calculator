import './App.css';

import Calculator from './components/Calculator/Calculator';
import DropDown from './components/DropDown/DropDown';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
      <DropDown />
      <div className="calculator-container">
        <Calculator />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default App;
