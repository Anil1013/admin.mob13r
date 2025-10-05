import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Summary from './pages/Summary'
import GenericTable from './pages/GenericTable'
import Topbar from './components/Topbar'
const BASE = "https://x8ki-letl-twmt.n7.xano.io/api:3x_wYKV_"
export default function App(){
  return (
    <Router>
      <Topbar />
      <div className="navlinks">
        <Link to="/">Summary</Link>
        <Link to="/ad_network">Ad Network</Link>
        <Link to="/advertiser">Advertiser</Link>
        <Link to="/campaign_configuration">Campaign Configuration</Link>
        <Link to="/campaign_create_service">Campaign Create Service</Link>
        <Link to="/campaign_detail">Campaign Detail</Link>
        <Link to="/create_service">Create Service</Link>
        <Link to="/report">Report</Link>
        <Link to="/service_configuration">Service Configuration</Link>
        <Link to="/service_configuration_create_service">Service Config - Create Service</Link>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<Summary base={BASE} />} />
          <Route path="/ad_network" element={<GenericTable base={BASE} endpoint="ad_network" />} />
          <Route path="/advertiser" element={<GenericTable base={BASE} endpoint="advertiser" />} />
          <Route path="/campaign_configuration" element={<GenericTable base={BASE} endpoint="campaign_configuration" />} />
          <Route path="/campaign_create_service" element={<GenericTable base={BASE} endpoint="campaign_create_service" />} />
          <Route path="/campaign_detail" element={<GenericTable base={BASE} endpoint="campaign_detail" />} />
          <Route path="/create_service" element={<GenericTable base={BASE} endpoint="create_service" />} />
          <Route path="/report" element={<GenericTable base={BASE} endpoint="report" />} />
          <Route path="/service_configuration" element={<GenericTable base={BASE} endpoint="service_configuration" />} />
          <Route path="/service_configuration_create_service" element={<GenericTable base={BASE} endpoint="service_configuration_create_service" />} />
        </Routes>
      </div>
    </Router>
  )
}