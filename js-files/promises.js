const done = false
const isItDoneYet = new Promise((resolve, reject)=>{
    if(done) {
        resolve("resolved sucessfully")
    }else {
        reject("rejected")
    }
})

const checkIfItDone = () => {
    isItDoneYet.then(msg =>{console.log(msg)})
    .catch(err => {
        console.log(err)
    })
}
// checkIfItDone()
