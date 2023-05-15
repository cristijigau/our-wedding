import Main from './components/Main';
import Landing from './components/Landing';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Main />} />
        <Route path="home" element={<Landing />} />
        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />
        {/* select any route that makes it past other routes and redirect with navigate to home page */}
      </Routes>
    </div>
  );
}

export default App;
