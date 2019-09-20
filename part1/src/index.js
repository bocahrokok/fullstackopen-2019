import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'  
import './index.css'

const http = require('http')

const app = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World')
})

const port = 3001

app.listen(port)
console.log(`Server running on port ${port}`)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

