import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePageZestaw4 from './pages/HomePageZestaw4';
import { ROUTES_ZESTAW4 } from './utils/constans';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES_ZESTAW4.home} element={<HomePageZestaw4 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
