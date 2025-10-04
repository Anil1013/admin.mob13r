import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import SummaryPage from "./pages/SummaryPage";
import AdvertisersPage from "./pages/AdvertisersPage";
import CampaignsPage from "./pages/CampaignsPage";
import ReportsPage from "./pages/ReportsPage";
import AdNetworkPage from "./pages/AdNetworkPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <Routes>
            <Route path="/" element={<SummaryPage />} />
            <Route path="/advertisers" element={<AdvertisersPage />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/adnetworks" element={<AdNetworkPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
