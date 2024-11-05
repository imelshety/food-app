
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
)
