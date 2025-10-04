import React, {useEffect, useState} from 'react'
import axios from 'axios'
const BASE = "https://x8ki-letl-twmt.n7.xano.io/api:3x_wYKV_"

export default function CampaignPage(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios.get(BASE + '/campaign_detail').then(r=>{ setData(r.data); setLoading(false) }).catch(e=>{console.error(e); setLoading(false)})
  },[])
  return (
    <div className="page">
      <h2>Campaign Details</h2>
      {loading ? <p>Loading...</p> : (
        <table className="data-table">
          <thead><tr><th>ID</th><th>Campaign</th><th>Status</th></tr></thead>
          <tbody>
            {data.map(item=>(
              <tr key={item.id || item.campaign_detail_id}>
                <td>{item.id || item.campaign_detail_id}</td>
                <td>{item.name || item.campaign_name || '-'}</td>
                <td>{item.status || item.state || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}