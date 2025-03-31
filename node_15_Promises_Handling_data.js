let a = 10;
let b = 0;

let waiting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    }, 3000);
})

waiting.then((data)=>{
    b = data;
    console.log(a+b)
});