const async_hooks = require('async_hooks')

console.log(async_hooks.executionAsyncId())
console.log(async_hooks.triggerAsyncId())