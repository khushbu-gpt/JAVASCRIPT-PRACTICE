let users = [
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" },
  { name: "D", city: "Mumbai" },
  { name: "E", city: "Pune" }
]
// let obj={}
// for(let user of users){
//     if(!obj[user.city]){
//         obj[user.city]=[]
//     }
//         obj[user.city].push(user)
    
// }
// console.log(obj)

let obj = {
  name: "Khushbu",
  address: {
    city: "Delhi",
    pin: 110001
  },
  skills: {
    js: true,
    react: false
  }
}
let result={}
for(let key in obj){
    if(typeof obj[key]=="object"){
        let inner=obj[key]
        for(let key in inner){
            result[key]=inner[key]
        }
    }else{
        result[key]=obj[key]
    }
}
console.log(result)