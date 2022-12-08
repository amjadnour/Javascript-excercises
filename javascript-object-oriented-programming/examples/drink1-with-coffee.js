class Drink {
    temperature = 17
    constructor(temp) {
        this.temperature = temp
    }
    isHot() {
        return this.temperature > 50
    }
}

class Coffee {
    temperature = 90 
    strength
    constructor (strength) {
        this.strength = strength
    }
    isHot () {
        return this.temperature > 50
    }
}
