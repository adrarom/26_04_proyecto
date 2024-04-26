import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './Card.jsx'
import './index.css'
import ListConstructor from './components/List/ListConstructor.jsx'
import CardGenerator from './components/Card/CardGenerator.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CardGenerator />
    
  </React.StrictMode>,
)
