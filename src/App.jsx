// Components
import { DropDown, Footer } from 'components';
import { Calculator } from 'features/calculator';

import './App.css';

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
