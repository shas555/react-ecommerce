import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS - must come first
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css'
// Custom styles - must come LAST to override Bootstrap
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-ecommerce">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)



if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((reg) => console.log('Service Worker registered!', reg))
      .catch((err) => console.log('Service Worker registration failed:', err))
  })
}
