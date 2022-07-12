import React from 'react';
import { Route, Routes } from 'react-router-dom';
import tw, { GlobalStyles } from 'twin.macro';
import HomePage from './pages/Home';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';
import './App.css'

const Container = tw.div`text-center`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Container>
        <Routes>
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;