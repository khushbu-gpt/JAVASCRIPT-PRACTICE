let person = {
  name: "Khushbu",
  age: 20,
  city: "Delhi"
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))
let obj1 = { a: 1 }
let obj2 = { b: 2 }

let merged = Object.assign({}, obj1, obj2)
console.log(merged)

console.log("age" in person)  
console.log("salary" in person) 

let person2 = {
  name: "Khushbu",
  address: {
    city: "Delhi",
    pin: 110001
  }
}
console.log(person2.address.state)   // Delhi
for (let key in person2) {
  console.log(key, person2[key])
}

let str="I am learning JavaScript and JavaScript is fun and easy"

let obj={}
const word=str.split(" ")
let maxChar=""
let count=0
for(let i=0;i<word.length;i++){
if(obj[word[i]]){
    obj[word[i]]++
}else{
    obj[word[i]]=1
}
if(obj[word[i]]>count){
    count=obj[word[i]]
    maxChar=word[i]
}
}
console.log(maxChar)
console.log(obj)


let user = {
  name: "Rahul",
  address: {
    city: "Delhi",
    pin: 110001,
    location: {
      lat: 28.7041,
      long: 77.1025
    }
  }
}

user.address.city="Noida"
user.address.location.lat=28.5355
user.address.location.country="India"



let ob1 = { a: 1 }
let ob2 = ob1

ob2.a = 2
console.log(ob1.a)  // 2

JSON.parse(JSON.stringify(ob1))

let copy = JSON.parse(JSON.stringify(user))
copy.address.city = "Noida"

console.log(user.address.city)  // Delhi  (original not changed)

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj

  let clone = Array.isArray(obj) ? [] : {}

  for (let key in obj) {
    clone[key] = deepClone(obj[key])
  }

  return clone
}

let user2 = {
  name: "Rahul",
  age: 25,
  skills: {
    js: true,
    css: false
  }
}

let {name,age,skills:{js:javascriptSkill,css}}=user2
console.log(javascriptSkill)