import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const BASE = "https://x8ki-letl-twmt.n7.xano.io/api:3x_wYKV_"

export default function DashboardPage(){
  const [stats, setStats] = useState({advertisers:0, campaigns:0, reports:0, adNetworks:0})
  const [chartData, setChartData] = useState([])

  useEffect(()=>{
    async function load(){
      try{
        const [adv, camp, rep, adn] = await Promise.all([
          axios.get(BASE + '/advertiser').then(r=>r.data),
          axios.get(BASE + '/campaign_detail').then(r=>r.data),
          axios.get(BASE + '/report').then(r=>r.data),
          axios.get(BASE + '/ad_network').then(r=>r.data)
        ])
        setStats({advertisers: adv.length, campaigns: camp.length, reports: rep.length, adNetworks: adn.length})
        const cd = Array.from({length:7}).map((_,i)=>({day: `D${i+1}`, value: Math.round(camp.length*(0.6 + Math.random()*1.6))}))
        setChartData(cd)
      }catch(err){
        console.error(err)
      }
    }
    load()
  },[])

  return (
    <div className="page">
      <h2>Overview</h2>
      <div className="cards">
        <div className="stat-card">
          <h3>Advertisers</h3>
          <p className="stat">{stats.advertisers}</p>
        </div>
        <div className="stat-card">
          <h3>Campaigns</h3>
          <p className="stat">{stats.campaigns}</p>
        </div>
        <div className="stat-card">
          <h3>Reports</h3>
          <p className="stat">{stats.reports}</p>
        </div>
        <div className="stat-card">
          <h3>Ad Networks</h3>
          <p className="stat">{stats.adNetworks}</p>
        </div>
      </div>

      <section className="chart-card">
        <h3>Campaigns Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="day" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#800000" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </div>
  )
}