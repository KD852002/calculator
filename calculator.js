var title=document.querySelector("title")
var display=document.querySelector("input")
var btn=document.querySelectorAll("button")
var clear=document.querySelector("#clear")
var storage=[]
var result=0
var temp=0

// console.log(title.display,btn)

function toggle(){
    if(title.innerHTML=="calculator"){
        title.innerHTML="kachara"
    }
    else{
        title.innerHTML="calculator"
    }
}
setInterval(toggle,1000)

btn.forEach((number)=>{
    number.addEventListener("click",()=>{
        calculator(number.innerHTML) 
                
    })
})
function calculator(num){
    if(num=="AC"){
        storage=[]
        result=0
         display.value=result
    }
    else if (num=="clear"){
        storage.pop(num)
        temp=storage.join("")
        display.value=temp
    }
    else if(num=="="){
        result=eval(temp)
        display.value=result
    }
    else{
        storage.push(num)
         temp=storage.join("")
         display.value=temp
    }
    

}






// function add(a,b){
//     var c=a+b
//     console.log(c)
// }
// add(5,3)














































// var string =["a","b","c","d"]

// var dummy=storage=["1","2","3","4","5"]
// storage.map((e)=>{
//     return e
// })
// console.log(dummy);

// var mix=storage.join("")
// var ss=string.join("")
// console.log(mix,ss)


// var math=[1,2,3,4,"*",5]
// var math=math.join("")
// console.log(math)