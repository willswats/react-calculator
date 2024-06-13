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
      <Footer />
    </div>
  );
};

export default App;
