const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('hit',(number1,number2)=>{
    console.log(`hitted ${number1} ${number2}times`)
})

eventEmitter.emit('hit',23 ,45)
    