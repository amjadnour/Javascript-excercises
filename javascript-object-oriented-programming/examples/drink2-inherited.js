class Drink {
    temperature = 0
    constructor(temp) {
        this.temperature = temp
    }
    isHot() {
        return this.temperature > 50
    }
}

class Coffee extends Drink {
    strength

    constructor(strength, temp) {
        // We call super to invoke the constructor of the superclass
        super(temp)
        this.strength = strength
    }
    isCaffeinated() {
        return this.strength > 0
    }
}

const morningBeverage = new Coffee(4)
console.log('Caffeinated?', morningBeverage.isCaffeinated()) // true
console.log('Temp?', morningBeverage.temperature) // 90
console.log('Hot?', morningBeverage.isHot()) // true

class SoftDrink extends Drink {
    fizzy
    constructor(newFizzy, newTemperature) {
        // We call super to invoke the constructor of the superclass
        super(newTemperature)
        this.fizzy = newFizzy
    }
    isFizzy = () => this.fizzy
}

const pop = new SoftDrink(true, 5)
console.log('my pop:', pop)
console.log('my pop is fizzy:', pop.isFizzy())
