import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TableView() {
  const [tables, setTables] = useState([]);
  const baseURL = "https://x8ki-letl-twmt.n7.xano.io/api:3x_wYKV_";

  useEffect(() => {
    axios.get(baseURL)
      .then((res) => setTables(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>All Tables</h2>
      <pre>{JSON.stringify(tables, null, 2)}</pre>
    </div>
  );
}
