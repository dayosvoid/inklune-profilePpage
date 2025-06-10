import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {EditBioContextProvider} from '../src/context/EditBioContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditBioContextProvider>
    <App />
    </EditBioContextProvider>
  </StrictMode>,
)
