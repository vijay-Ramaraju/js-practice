
const arr = [1,2,2,34,34,2,5,2,5,1,4]
// const duplicateValues = arr.filter((val,ind,self) =>{
//     if (self.indexOf(val) === ind){
//         return val
//     }
// })
// console.log(duplicateValues)
const obj = {}
let count=0;
for (let i of arr){
    if (i in obj){
        obj[i]++
    }else{
        obj[i] = 1;
    }
}
let maxRep = 0
let mostRepeatedEe ;
for (const key in obj){
    if (maxRep < obj[key]){
        maxRep = obj[key]
        mostRepeatedEe = key
    }
}
