function createPerson (name) {
    return {
        name: name,
        interests: [],
        addInterest: function (interest) {
            this.interests.push(interest)
        },
    }
}

const people = [
    createPerson("Tom", "M"),
    createPerson("Rowan", "Crazy-Cat-Man")
]

const otherPeople = {
    Rowan: createPerson("Rowan", "Crazy-Cat-Man"),
    Tom: createPerson("Tom", "M"),
}

people[0].addInterest("Pokemon")
people[1].addInterest("Cats")

console.log('People:', people)
