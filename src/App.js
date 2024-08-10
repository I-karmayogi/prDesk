import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import MiniDrawer from './Components/Sidebar/Sidebar';
import FormComponent from './Components/Template/Template'

export default function App() {
  return (
    <Router>
      <MiniDrawer />
      <Routes>
        <Route path="/inbox" element={<FormComponent />} />
      </Routes>
    </Router>
  );
}
