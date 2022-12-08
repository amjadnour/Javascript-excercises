class Dog {
    legs = 4
    name = ""
    colour = "Brown"

    constructor(name) {
        this.name = name
    }

    bark() {
        return "WOOF"
    }
}

const wiggins = new Dog('Wiggins')

console.log('Clems dog:', wiggins)
console.log('Clems dog goes:', wiggins.bark())

const gatsby = new Dog("The Great Gatsby")
console.log(gatsby.name)
