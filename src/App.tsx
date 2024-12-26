import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import LeftSidebar from './components/LeftSidebar';
import Navbar from './components/Navbar';
import AppRoutes from './routes';
import Appr from './Appr';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-1/4 lg:w-1/5 bg-gray-800 text-white fixed md:relative z-10">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-0 md:ml-[25%] lg:ml-[20%]">
          <Navbar />
          <main className="p-4">
            <AppRoutes />
            {/* <Appr/> */}
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
