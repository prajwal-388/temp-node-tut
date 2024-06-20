const secret="secret"
const pink="pink"
const orange="orange"
const fun1=(a,b)=>{
  return console.log(a+b)
}
module.exports={pink,orange,fun1}
const {pink,orange,fun1}=require("./var")
const {hi}=require("./fun")
const alt=require("./6-alternative-flavour")
require("./7-mind-grenade")
