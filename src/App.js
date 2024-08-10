import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



//components
import MiniDrawer from './Components/Sidebar/Sidebar';
import FormComponent from './Components/Template/Template'
import HeaderFooter from './Components/Header-Footer/Header-Footer';

export default function App() {
  return (
    <Router>
      <MiniDrawer />
      <Routes>
        <Route path="/create-template" element={<FormComponent />} />
        <Route path="/header-and-footer" element={<HeaderFooter />} />
      </Routes>
    </Router>
  );
}
