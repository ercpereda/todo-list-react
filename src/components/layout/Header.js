import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link to="/" className="link">Home</Link> - <Link to="/about" className="link">About</Link>
    </header>
  )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
