import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from '../pages/Dashboard';
import Analytics from '../pages/Analytics';
import Documents from '../pages/Documents';


const MainLayout = () => {
    const styles = {
        mainContainer:{
          backgroundColor: '#F8F9FD',
          display:"flex",
        },
        contentStyle:{
          width:"100%",
          marginLeft:"100px",
          overflow:"hidden",
       
        }
      }
    return (
        <div className="main-container" style={styles.mainContainer}>
            <Sidebar />
            <div className="content" style={styles.contentStyle}>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/document" element={<Documents />} />
                    <Route path="/wallet" element={<Documents />} />
                    <Route path="/settings" element={<Documents />} />
                    <Route path="/logout" element={<Documents />} />



                </Routes>
            </div>
        </div>
    )
}

export default MainLayout
