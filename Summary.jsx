import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
export default function Summary({base}){
  const [counts, setCounts] = useState({})
  const [chart, setChart] = useState([])
  useEffect(()=>{
    async function load(){
      try{
        const endpoints = ['advertiser','campaign_detail','report','ad_network','campaign_configuration','campaign_create_service','create_service','service_configuration','service_configuration_create_service']
        const results = await Promise.all(endpoints.map(e=>axios.get(base + '/' + e).then(r=>r.data.length).catch(()=>0)))
        const obj = {}
        endpoints.forEach((e,i)=> obj[e]=results[i])
        setCounts(obj)
        setChart(endpoints.map((e,i)=>({name:e, value: results[i]})))
      }catch(err){
        console.error(err)
      }
    }
    load()
  },[base])
  return (
    <div className="page">
      <h2>Welcome to Mob13r Admin Panel</h2>
      <div className="cards">
        <div className="stat"><h3>Advertisers</h3><p>{counts.advertiser || 0}</p></div>
        <div className="stat"><h3>Campaigns</h3><p>{counts.campaign_detail || 0}</p></div>
        <div className="stat"><h3>Reports</h3><p>{counts.report || 0}</p></div>
        <div className="stat"><h3>Ad Networks</h3><p>{counts.ad_network || 0}</p></div>
      </div>
      <section className="chart">
        <h3>Records Overview</h3>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={chart}>
            <XAxis dataKey="name" tick={{fontSize:12}} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#800000" />
          </BarChart>
        </ResponsiveContainer>
      </section>
      <footer className="footer">Powered by Mob13r Digital Media ©2019</footer>
    </div>
  )
}