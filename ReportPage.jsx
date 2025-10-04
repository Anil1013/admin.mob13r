import React, {useEffect, useState} from 'react'
import axios from 'axios'
const BASE = "https://x8ki-letl-twmt.n7.xano.io/api:3x_wYKV_"

export default function ReportPage(){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    axios.get(BASE + '/report').then(r=>{ setData(r.data); setLoading(false) }).catch(e=>{console.error(e); setLoading(false)})
  },[])
  return (
    <div className="page">
      <h2>Reports</h2>
      {loading ? <p>Loading...</p> : (
        <table className="data-table">
          <thead><tr><th>ID</th><th>Title</th><th>Date</th></tr></thead>
          <tbody>
            {data.map(item=>(
              <tr key={item.id || item.report_id}>
                <td>{item.id || item.report_id}</td>
                <td>{item.title || item.name || '-'}</td>
                <td>{item.date || item.created_at || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}