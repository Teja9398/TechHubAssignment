import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-slate-100'>
      <App />
    </div>
  </React.StrictMode>,
)
