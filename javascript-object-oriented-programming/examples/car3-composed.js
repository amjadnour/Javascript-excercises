class KeyIgnition {
    requiredKey = ""
    insertedKey = ""

    constructor(key) {
        this.requiredKey = key // Set the key
    }
    insertKey(key) {
        this.insertedKey = key // Anyone can insert a key
    }
    isUnlocked() {
        return this.insertedKey === this.requiredKey
    }
}

class PetrolEngine {
    running = false

    //note: no constructor

    start() {
        this.running = true
    }
}

class Car {
    engine
    ignition
    constructor(key) {
        this.engine = new PetrolEngine()
        this.ignition = new KeyIgnition(key)
    }
    start() {
        if (this.ignition.isUnlocked()) {
            this.engine.start()
        }
    }
}

const mini = new Car('abc')
mini.ignition.insertKey('abc')
mini.start()
console.log('My favourite car:', mini)
