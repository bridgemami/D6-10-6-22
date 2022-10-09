//Call Stack
//last in, first out --> LIFO
//Event Loop
//it can only do one thing at a time
//Queue
//FIFO

//sync vs async execution
    //sync is one by one
         //alert() and prompt()are sync execution
         //sync
// let count = 0;
//          while(count < 1000){
//             console.log(count);
//             ++count
//             ;}

// let call= callBack => {
//     console.log('timer is complete');
// };
//count down to run the code call is function and 0 is milliseconds
// setTimeout(call, 0);

//Daily Challenge
// ========================= EXAMPLE 1 =========================
function job() {
    return new Promise(function(resolve, reject) {
        reject();
    });
}

let promises = job();

promises

.then(function() {
    console.log('Success 1');
})

.then(function() {
    console.log('Success 2');
})

.then(function() {
    console.log('Success 3');
})

.catch(function() {
    console.log('Error 1');
})

.then(function() {
    console.log('Success 4');
});

// ========================= EXAMPLE 2 =========================
// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);

//     return 'Error caught';
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });

//Take Home challenge
const api = 'https://thesimpsonsquoteapi.glitch.me/quotes';
console.log(api);
fetch(api)
.then (response => {
    return response.json()
})
.then (data=>{
    console.log(data);
    alert(data[0].quote);
     document.getElementById("quote").innerHTML = data[0].quote;
     document.getElementById("character").innerHTML = data[0].character;
     let image = document.createElement("img");
     document.body.append(image);
     image.src= data[0].image;
     image.alt=data[0].character;
     
 })