import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import EditorContext from './context/EditorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EditorContext>
    <App />

    </EditorContext>
  </React.StrictMode>,
)
