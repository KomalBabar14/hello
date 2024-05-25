function makeToast(callback:()=>void){
    console.log("making toast....")
    setTimeout(()=>{
        console.log('toast is ready')
        callback()
    },6000)
}
function boilEgg(callback:()=>void){
    console.log("boiling egg....")
    setTimeout(()=>{
        console.log('egg is ready')
        callback()
    },2000)
}
function makeCoffee(callback:()=>void){
    console.log("making coffee....")
    setTimeout(()=>{
        console.log('coffee is ready')
        callback()
    },4000)
}
function notify(){
    console.log("Your breakfast is ready")
}
makeToast(()=>{
    boilEgg(()=>{
        makeCoffee(()=>{
            notify()
        })
    })
})