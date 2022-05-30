import './App.css';

import Calculator from './components/Calculator/Calculator';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="app">
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
