import React from 'react';
import Navbar from './Navbar';
import TableView from './TableView';

export default function App() {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>Mob13r Dashboard</h1>
        <TableView />
      </main>
    </div>
  );
}
