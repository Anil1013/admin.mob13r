import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand">
        <img src="/logo.png" alt="Mob13r Logo" />
      </div>
      <nav className="menu">
        <NavLink to="/" end className="menu-item">Dashboard</NavLink>
        <NavLink to="/advertiser" className="menu-item">Advertisers</NavLink>
        <NavLink to="/ad_network" className="menu-item">Ad Networks</NavLink>
        <NavLink to="/campaign" className="menu-item">Campaigns</NavLink>
        <NavLink to="/report" className="menu-item">Reports</NavLink>
      </nav>
      <div className="sidebar-footer">Mob13r Digital Media</div>
    </aside>
  )
}