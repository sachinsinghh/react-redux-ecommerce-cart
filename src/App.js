import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Cards />} ></Route>
      <Route path="/cart/:id" element={<CardsDetails />}></Route>
    </Routes>
    </>
  );
}

export default App;
