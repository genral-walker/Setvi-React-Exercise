import { ROUTES } from 'constants/routes';
import { CreatePost, Details, Home } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.CREATE} element={<CreatePost />} />
        <Route path={ROUTES.DETAILS} element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
