import React from "react";
import { Route, Routes } from "react-router-dom";
import tw, { GlobalStyles } from "twin.macro";
import HomePage from "./pages/Home";
import AddPage from "./pages/Add";
import EditPage from "./pages/Edit";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import "./App.css";

const Container = tw.div`text-center`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Container>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
