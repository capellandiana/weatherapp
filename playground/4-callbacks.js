setTimeout(() => {
console.log('two seconds')
}, 2000)
// a callback function is nothing more than a function we procide as an argument to another function with the intention of having it called later on. 
//in this case we are providing a function as an argument to setTimeout with the intention that setTimeout is going to call this functin at some point in the funture.

const names = ['didnd', 'andress', 'adrian']
const shortNames = names.filter((name) => {
    return name.length <= 4
})

const geocode = (adress, callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    }
    return data
}
const data = geocode('philadelphia')
console.log(data)

// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b
//cant use return because im returning from the inner function not from add
        callback(sum)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})