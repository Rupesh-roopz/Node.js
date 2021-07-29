// const { Certificate } = require('crypto');
// const spkac = getSpkacSomehow();
// const challenge = Certificate.exportChallenge(spkac);
// console.log(challenge.toString('utf8'));
// Prints: the challenge as a UTF8 string

// try {
//     require ('crypto')
// }catch{
// console.log(" Crypto support is disables ")
// }

const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.alloc(16, 0); // Initialization vector.

const cipher = crypto.createCipheriv(algorithm, key, iv);
console.log(cipher)