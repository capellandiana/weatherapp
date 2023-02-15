//object property shorthand

const name = 'diana'
const userAge = 25
//why is name crossed out? but its still working...
const user = {
    name,
    age: userAge,
    location: 'charlotte'
}
console.log(user)

//object destructuring

const product = {
    label: 'red notebook',
    price: 4,
    stock: 204,
    salePrice: undefined,
    rating: 4.2
}
// const label = product.label
// const stock = product.stock
//we are extracting properties (label and stock) off of product (the object) we are creating new variables (label and stock) whose value comes from the properties on product
//when destructuring you can grab as many thngs as you want by just listing more thins after stock within the curly braces even if they dont exist. on an object at all. it would just come out as undefined.
//adding ':productlabel' changes the name of the label variaable
const {label:productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock }) => {
console.log(type, label, stock)
}
transaction('order', product)