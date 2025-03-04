
// setTimeout(() => console.log('Hi'), 2000)
// setTimeout(() => console.log('there!'), 2000)
// setTimeout(() => console.log('How'), 2000)
// setTimeout(() => console.log('are'), 2000)
// setTimeout(() => console.log('you?'), 2000)



// setTimeout(() => {
//     console.log('Hi')
//     setTimeout(() => {
//         console.log('there!')
//         setTimeout(() => {
//             console.log('How')
//             setTimeout(() => {
//                 console.log('are')
//                 setTimeout(() => {
//                     console.log('you?')
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)



// const printAfterDelay = seconds => (message, callback) => {
//     setTimeout(() => {
//         console.log(message)
//         if (callback) callback()
//     }, seconds * 1000)
// }

// const printAfter1s = printAfterDelay(1)

// printAfter1s('Hi', () =>
//     printAfter1s('there!', () =>
//         printAfter1s('How', () =>
//             printAfter1s('are', () =>
//                 printAfter1s('you?')))))



const logMessage = (message, time) => {

    return new Promise((resolve, reject) => {
        if (!time) reject({error: 'time not set'})

        console.log(message, time)
        setTimeout(() => {
        resolve(new Date().toLocaleTimeString())
    }, 1000)
    })
}

(async () => {
    try {
    const t1 = await logMessage('How')
    const t2 = await logMessage('are', t1)
    console.log('you', t2)
    } 
    catch({error}) {
        console.error(error)
    }
})()

// logMessage('hi')
//     .then(time => logMessage('there', time))
//     .then(time => logMessage('how', time))
//     .then(time => logMessage('are', time))
//     .then(time => console.log('you?', time))
//     .catch(({error}) => console.log(error))