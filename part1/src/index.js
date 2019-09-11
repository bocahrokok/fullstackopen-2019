import axios from 'axios'

const promise = axios.get('http://localhost:3001/notes')
console.log(promise)

const promise2 = axios.get('http://localhost:3001/foobar')
console.log(promise2)

const promise = axios.get('http://localhost:3001/notes')

promise.then(response => {
  console.log(response)
})