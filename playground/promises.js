
// waits two seconds and adds a and b 
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        // 2000ms
        setTimeout(() => resolve(a + b), 2000);
    });
}

// old
// add(2, 2).then(result => {
//     console.log({ result });
//     add(2, 2).then(resultTwo => console.log({ resultTwo })).catch(error => console.log({ error }));
// }).catch(error => console.log({ error }));

// using promise chaining
add(2, 2).then(result => {
    console.log(result);
    return add(result, 4);
}).then(resultTwo =>{
    console.log(resultTwo);
}).catch(error => console.log(error));