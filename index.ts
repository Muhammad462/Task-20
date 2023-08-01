//task 20:Creating objects
interface Mountain{
    name:string
    height:number
    location:string
}
const everest:Mountain = {
    name:"Everest",
    height:8848,
    location:"Nepal/China"
}
const k2:Mountain = {
    name:"K2",
    height:8611,
    location:"Pakistan/China"
}
const mountain: Mountain[] = [everest,k2]
console.log("the list of mountains:");
console.log("mountains");