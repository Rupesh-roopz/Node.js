const fs = require('fs');
const path = require('path')

// fs.open('C:\\Users\\rupesh.esambadi\\Desktop\\textDocument.txt', 'r+', (err,data)=>{
//     if(err){
//         console.log("error "+err)
//         return
//     }else{
//         console.log("data : "+ data)
//     }
// });

// fs.stat('C:\\Users\\rupesh.esambadi\\Desktop\\textDocument.txt',(err, stats)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(stats.isFile())
//     console.log(stats.size)

// })
//  notes = "textDocument.txt";

// // // console.log("Link : "+path.dirname(notes))
// // console.log(path.resolve(desktop))


// fs.open("notes", "a+",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

const folder = "C:\\Users\\rupesh.esambadi\\Desktop\\textDocument.txt";
const folder1 = "C:\\Users\\rupesh.esambadi\\Desktop\\someThing\\func";
// fs.mkdir(folder,(err,data)=>{
//     if(err){
//         console.log("an error occured"+err)
//     }
//     console.log("new document created")
// });

// fs.open(folder,'r',(err,data)=>{
//     if(err){
//         console.log("an error occured"+err)
//     }
//     console.log("new document opened")
// })

// fs.mkdir(folder1,(err,data)=>{
//     if(err){
//         console.log("an error occured"+err)
//     }
//     console.log("new document created")
// });

// fs.readdir(folder,'UTF8',(err,data)=>{
//     if(err){
//         console.log("an error occured"+err)
//     }
//     console.log(data)
// })

// fs.rm(folder1, { recursive: true, force: true }, (err) => {
//   if (err) {
//     throw err;
//   } 
//   console.log(`${folder} is deleted!`)
// });
// fs.stat(folder,(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })

// console.log(path.dirname(folder))
// console.log(path.basename(folder))
// const content ="hello"
// fs.writeFile(folder,content,{flag: 'a+'},(err,data)=>{
//     if(err){
//         console.log("something error")
//     }
// });

// const g = path.resolve('textDocument.txt')
// console.log(g)
// fs.open(folder,'r',(err,data)=>{
//     if(err){
//         console.log("an error occured"+err)
//     }
//     console.log("new document opened")
// })
fs.readFile(folder,'UTF-8', (err, data)=>{
    if(err) {
        console.log("err")
    }else {
        // console.log(data)
    }
    
});
fs.realpath(folder,(er, data) =>{
    console.log(data)
})
