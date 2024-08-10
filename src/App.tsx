import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthContextProvider from './auth/AuthContext';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import ProtectedRoute from './utils/ProtectedRoute';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
              <Route index element={<HomePage />} />
            </Route>
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
