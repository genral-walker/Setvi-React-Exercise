import { Navbar } from 'components';
import { ROUTES } from 'constants/routes';
import { CreatePost, Details, Home } from 'pages';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CREATE} element={<CreatePost />} />
        <Route path={ROUTES.DETAILS} element={<Details />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
