import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RepositoryList from "./components/RepositoryList";
import LoginPage from "./components/LoginPage";
import "./assets/Login.css";
import "./assets/styles.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/main"
          element={
            <div className="app">
              <Sidebar />
              <div className="main-content">
                <Header />
                <RepositoryList />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
