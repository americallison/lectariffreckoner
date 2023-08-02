import './App.css';
import CalculationPage from './components/CalculationPage';
import ConsumerSupplyType from './components/ConsumerSupplyTypes';
import ConsumptiontoAmount from './components/ConsumptiontoAmount';
import AmounttoConsumption from './components/AmounttoConsumption';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faDashboard, faDatabase, faPlusCircle, faCancel, faTimesCircle, faList } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faDashboard, faDatabase, faPlusCircle, faCancel, faTimesCircle, faList)

export default function App() {
  return (
    <div>
    <Router>
    <Routes>
    <Route exact path="/" element={<CalculationPage />} />
    <Route exact path="/consumersupplytype" element={<ConsumerSupplyType />} />
    <Route exact path="/amount-consumption" element={<AmounttoConsumption />} />
    <Route exact path="/conmsumption-amount" element={<ConsumptiontoAmount />} />
    </Routes>
    </Router>
</div>
  )
  }
