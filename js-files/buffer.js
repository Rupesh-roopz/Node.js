// console.log(Buffer)

// const buf = Buffer.from('hey');
// console.log(buf)

// const buff = Buffer.alloc(1000);

buff=Buffer.from("Rupesh");
// console.log(buff);
// console.log(buff.toString());
// console.log(buff.length);

// const buffer = Buffer.alloc(1000);
// buffer.write("Rupesh");
// console.log(buffer)

//Slice a buffer
// buff.subarray(0).toString();
// // console.log(buff.subarray(0))
// const slice = buff.subarray(0,6);
// console.log(slice.toString())
// buff[5] = 111
// console.log(slice.toString())

//copying

const bufCopy = Buffer.alloc(6);
bufCopy.set(buff)
console.log(bufCopy.toString())