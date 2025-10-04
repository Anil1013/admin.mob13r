import React, {useEffect, useState} from 'react'
import axios from 'axios'
const BASE = "https://x8ki-letl-twmt.n7.xano.io/api:3x_wYKV_"

export default function AdNetworkPage(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios.get(BASE + '/ad_network').then(r=>{ setData(r.data); setLoading(false) }).catch(e=>{console.error(e); setLoading(false)})
  },[])
  return (
    <div className="page">
      <h2>Ad Networks</h2>
      {loading ? <p>Loading...</p> : (
        <table className="data-table">
          <thead><tr><th>ID</th><th>Network</th><th>Actions</th></tr></thead>
          <tbody>
            {data.map(item=>(
              <tr key={item.id || item.ad_network_id}>
                <td>{item.id || item.ad_network_id}</td>
                <td>{item.name || item.network_name || '-'}</td>
                <td><button className="btn small">View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}