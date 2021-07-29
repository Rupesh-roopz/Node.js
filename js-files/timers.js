function greet(){
    console.log("Hello from function")
}

// setTimeout(greet,2000)

// setTimeout(()=>{
//     console.log("Rupesh");
// },2000)

// setInterval(greet,2000)
// clearInterval()

function stopWatch(endTime){
    count=0;
    console.log(count);
    count++;
    if(count == endTime){
        clearInterval()
    }
}
setInterval(stopWatch,1000,10)