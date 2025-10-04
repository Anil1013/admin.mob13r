import React, {useEffect, useState} from 'react'
import axios from 'axios'
export default function GenericTable({base, endpoint}){
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [formVisible, setFormVisible] = useState(false)
  const [editItem, setEditItem] = useState(null)
  const [formData, setFormData] = useState({})

  useEffect(()=>{ load() },[base,endpoint])

  async function load(){
    setLoading(true)
    try{
      const res = await axios.get(base + '/' + endpoint)
      setData(res.data || [])
    }catch(e){
      console.error(e)
      setData([])
    }finally{ setLoading(false) }
  }

  function openAdd(){ setFormData({}); setEditItem(null); setFormVisible(true) }
  function openEdit(item){ setEditItem(item); setFormData(item); setFormVisible(true) }
  function handleChange(e){ setFormData({...formData, [e.target.name]: e.target.value}) }

  async function submit(){
    try{
      if(editItem){
        const id = editItem.id || editItem[Object.keys(editItem)[0]]
        await axios.patch(base + `/${endpoint}/${id}`, formData)
      } else {
        await axios.post(base + '/' + endpoint, formData)
      }
      setFormVisible(false)
      load()
    }catch(err){ console.error(err) }
  }

  async function remove(item){
    if(!confirm('Delete this record?')) return
    try{
      const id = item.id || item[Object.keys(item)[0]]
      await axios.delete(base + `/${endpoint}/${id}`)
      load()
    }catch(err){ console.error(err) }
  }

  return (
    <div className="page">
      <h2>{endpoint.replace(/_/g,' ').toUpperCase()}</h2>
      <div className="actions"><button className="btn" onClick={openAdd}>Add New</button></div>
      {loading ? <p>Loading...</p> : (
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr>
                {data[0] ? Object.keys(data[0]).slice(0,6).map(k=>(<th key={k}>{k}</th>)) : <th>Columns</th>}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx)=>(
                <tr key={idx}>
                  {Object.keys(row).slice(0,6).map(k=>(<td key={k}>{String(row[k])}</td>))}
                  <td>
                    <button className="btn small" onClick={()=>openEdit(row)}>Edit</button>
                    <button className="btn small ghost" onClick={()=>remove(row)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {formVisible && (
        <div className="modal">
          <div className="modal-card">
            <h3>{editItem ? 'Edit Record' : 'Add Record'}</h3>
            <div className="form-grid">
              {Object.keys(formData).length? Object.keys(formData).slice(0,6).map(k=>(
                <label key={k}>{k}<input name={k} defaultValue={formData[k]} onChange={handleChange} /></label>
              )) :
                Array.from({length:4}).map((_,i)=> <label key={i}>Field{i+1}<input name={'field'+i} onChange={handleChange} /></label>)
              }
            </div>
            <div className="modal-actions">
              <button className="btn" onClick={submit}>Save</button>
              <button className="btn ghost" onClick={()=>setFormVisible(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}