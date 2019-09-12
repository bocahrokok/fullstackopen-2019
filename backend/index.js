const express = require('express')
const app = express()



let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
      },
      {
        id: 2,
        content: "Browser can execute only Javascript",
        date: "2019-05-30T18:39:34.091Z",
        important: false
      },
      {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2019-05-30T19:20:14.298Z",
        important: true
      }
]


app.get('/', (req,res) => {
    res.send('<h1> Henlo woldm </h1>')
})

app.get('/notes', (req,res) => {
    res.json(notes)
})

app.get('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => {
        console.log(note.id, typeof note.id, id, typeof id, note.id === id)
        return note.id === id;
    })
    console.log(note);
    response.json(note)

    if (note) {
        response.json(note)
      } else {
        response.status(404).end()
      }
    
  })


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)