class Car {
    running = false
    requiredKey = ""
    insertedKey = ""

    constructor(key) {
        this.requiredKey = key // Set the key
    }
    insertKey(key) {
        this.insertedKey = key // Anyone can insert a key
    }
    start() {
        // Start the car if the right key is in
        if (this.insertedKey === this.requiredKey) {
            this.running = true
        } else {
            console.error('STOP THIEF!')
        }
    }
}

const mini = new Car('abc')
mini.insertKey('abc')
mini.start()
console.log('My favourite car:', mini)
