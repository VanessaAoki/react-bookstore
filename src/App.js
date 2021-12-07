import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/Header';
import BooksPage from './pages/BooksPage';
import CategoriesPage from './pages/CategoriesPage';

export default function App() {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="body-container">
          <Routes>
            <Route path="/" exact element={<Navigate to="/books" />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
