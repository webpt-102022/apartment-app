import './App.css';
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import ApartmentDetail from './pages/ApartmentDetail';
import NewApartment from './pages/NewApartment';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartments/:apartmentId" element={<ApartmentDetail />} />
        <Route path="/apartments/new" element={<NewApartment />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
