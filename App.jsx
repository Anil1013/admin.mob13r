import React from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import DashboardPage from './pages/DashboardPage'
import AdvertiserPage from './pages/AdvertiserPage'
import AdNetworkPage from './pages/AdNetworkPage'
import CampaignPage from './pages/CampaignPage'
import ReportPage from './pages/ReportPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App(){
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Topbar />
          <div className="content">
            <Routes>
              <Route path='/' element={<DashboardPage />} />
              <Route path='/advertiser' element={<AdvertiserPage />} />
              <Route path='/ad_network' element={<AdNetworkPage />} />
              <Route path='/campaign' element={<CampaignPage />} />
              <Route path='/report' element={<ReportPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}