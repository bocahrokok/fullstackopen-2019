const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)
console.log(t2)


const t3 = [1,2,3]
const m1 = t.map(value => value *2)
console.log(m1)

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

const t4 = [1,2,3,4,5]
const [first, second, ...rest] = t

console.log(first, second)
console.log(rest)

const object1 = {
  name: 'Arto',
  age: 35, 
  education: 'phd'
}

const object2 = {
  name: 'fulstack',
  leve: 'Intermeed', 
  size: 5
}

const object3 = {
  name: 'Arto',
  age: 35, 
  education: ''
}

console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName])

object1.adress = 'yogya'
object['secret number'] = 12345

const sum = (p1,p2)  => {
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

const square = p => {
  console.log(p)
  return  p * p
}

const squreS = p => p * p

const avg = function(a,b) {
  return (a + b)/ 2
}

const result = avg(2,5)
// result is now 3.5



const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is', this.name)
    },
    doAddition: function(a, b) {
      console.log(a + b)
    },
  }
  
  arto.doAddition(1, 4)        // 5 is printed
  
  const referenceToAdditon = arto.doAddition
  referenceToAdditon(10, 15)   // 25 is printed
  
  arto.greet()
  
  const referenceToGreet = arto.greet
  referenceToGreet() // error message is printed to console
  
  const arto1 = {
    name: 'Arto Hellas',
    greet: function() {
      console.log('hello, my name is', this.name)
    },
  }
  
  setTimeout(arto1.greet, 1000)