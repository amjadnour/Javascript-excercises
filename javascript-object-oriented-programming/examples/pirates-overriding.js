class Person {
    numLegs = 2
    speak(words) {
        console.log(words)
    }
}

const alice = new Person()
console.log('Alice:', alice)
alice.speak('Hello there')

class Pirate extends Person {
    numLegs = 1 //override the default value

    // we are overriding the original speak method
    speak(words) {
        // (but we're still making use of it with super.speak)
        super.speak("Arrr! " + words.toUpperCase() + "!")
    }
}

const blackBeard = new Pirate()
console.log('BlackBeard:', blackBeard)
blackBeard.speak('Give me the gold')
