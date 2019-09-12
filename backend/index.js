const http = require('http')



let notes = [
    
]

const app = http.createServer((req, res)=> {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello World')
})

const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)