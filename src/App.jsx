import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
    
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
      </Routes>
    </Router>
);
}

export default App;
