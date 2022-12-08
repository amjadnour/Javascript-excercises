class Drink {
    temperature = 17
    constructor(temp) {
        this.temperature = temp
    }
    isHot() {
        return this.temperature > 50
    }
}

class Coffee extends Drink {
    strength
    constructor(strength) {
        // We call super to invoke the constructor of the superclass
        const myTemperature = 90 // default this for Coffee
        super(myTemperature)
        this.strength = strength
    }
    isCaffeinated() {
        return this.strength > 0
    }
}

class SoftDrink extends Drink {
    fizzy
    constructor(newFizzy, newTemperature) {
        // We call super to invoke the constructor of the superclass
        super(newTemperature)
        this.fizzy = newFizzy
    }
    isFizzy = () => this.fizzy
}

class Tea extends Drink {
    strength
    constructor(strength, newTemperature) {
        // We call super to invoke the constructor of the superclass
        super(newTemperature)
        this.strength = strength
    }
    isCaffeinated() {
        return this.strength > 0
    }
}

class HerbalTea extends Tea {
    constructor(newTemperature) {
        // We call super to invoke the constructor of the superclass
        super(0, newTemperature)
    }
    isCaffeinated() {
        return false
    }
}
