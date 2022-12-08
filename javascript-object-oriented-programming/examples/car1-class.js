class Car {
    running = false

    constructor() {
        //nothing to do
    }
    
    start () {
        running = true
    }
}

const mini = new Car()

console.log('My favourite car:', mini)
