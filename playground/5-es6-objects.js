// Object Property Shorthand

const name = 'Andrew'
const userAge = 27

const user = {
    name,
    age: userAge,
    location: 'Pullman'
}

// console.log(user)

// object Destructuring

const product = {
    label: 'Red Notebook',
    price: 2,
    // stock: 201,
    salePrice: undefined,
    rating: 4.5
}

// const label = product.label
// const stock = product.stock

// const {label: productLabel, stock, rating = 5} = product
// console.log(productLabel, stock, rating)

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)