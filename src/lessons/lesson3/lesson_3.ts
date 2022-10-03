console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


let prom = new Promise((resolve, reject) => {
    // some code
    let a = 10;
    let b = 15;
    let c = a + b;
    setTimeout(resolve, 1000, 5);
    // reject(0)
});


// then error then error
prom.then(res => {
    console.log(res);
    return 58;
}, err => {
    console.log(err);
    return 50;
}).then(res2 => {
    console.log('res2 ', res2);
}, err2 => {
    console.log('err2 ', err2);
    return 40;
})


// then then then catch
prom.then(res3 => {
    console.log('res3 ', res3);
    //@ts-ignore
    return res3 + 58;
})
.then(res4 => {
    console.log('res4 ', res4);
    //@ts-ignore
    return res4 + 68;
})
.catch(error => {
    console.log("error ", error);
})


// then catch then catch
prom.then(res5 => {
    console.log('res5 ', res5);
    //@ts-ignore
    return res5 + 10;
})
.catch(error => {
    console.log("error ", error);
})
.then(res6 => {
    console.log('res6 ', res6);
    //@ts-ignore
    return res6 + 15;
})
.catch(error => {
    console.log("error ", error);
})


// finally не может вернуть новый промис, не может изменить промис
// используют для выполнения side effects (например, preloader)
.then(res7 => {
    console.log('res7 ', res7);
    //@ts-ignore
    return res7 + 15;
})
//@ts-ignore
.finally(fin => {
    console.log('finally ', fin);
    return 100;
})
.then (res8 => {
    console.log('res8 ', res8);
    //@ts-ignore
    return res8 + 15;
})

// just a plug
export default () => { };