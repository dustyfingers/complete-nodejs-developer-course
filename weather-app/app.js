console.log('Starting...');

setTimeout(() => {
    console.log('setTimeOut cb ran!')
}, 2000);

setTimeout(() => {
    console.log('second setTimeOut cb ran!')
}, 0);

console.log('Finished!');