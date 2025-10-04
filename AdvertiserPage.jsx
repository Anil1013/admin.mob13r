import React, {useEffect, useState} from 'react'
import axios from 'axios'
const BASE = "https://x8ki-letl-twmt.n7.xano.io/api:3x_wYKV_"

export default function AdvertiserPage(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get(BASE + '/advertiser').then(r=>{ setData(r.data); setLoading(false) }).catch(e=>{console.error(e); setLoading(false)})
  },[])

  return (
    <div className="page">
      <h2>Advertisers</h2>
      {loading ? <p>Loading...</p> : (
        <table className="data-table">
          <thead><tr><th>ID</th><th>Name</th><th>Actions</th></tr></thead>
          <tbody>
            {data.map(item=>(
              <tr key={item.id || item.advertiser_id}>
                <td>{item.id || item.advertiser_id}</td>
                <td>{item.name || item.title || item.company_name || '-'}</td>
                <td>
                  <button className="btn small">Edit</button>
                  <button className="btn small ghost">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}