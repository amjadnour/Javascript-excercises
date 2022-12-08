// Example

const person2 = {
    name: "Alice",
    dob: new Date(1990, 07, 07),
    interests: [
        "rugby",
        "guitar",
    ],
    addInterest: function (interest) {
        if (!this.interests.includes(interest)) {
            this.interests.push(interest)
        }
    }
}
console.log('Person2:', person2)

// Example

const people1 = [
    {
        name: "Alice", 
        interests: [
            "guitar",
        ],
        addInterest: function (interest) {
            if (!this.interests.includes(interest)) {
                this.interests.push(interest)
            }
        },
    },
    {
        name: "Rowan", 
        interests: [
            "plants",
        ],
        addInterest: function (interest) {
            if (!this.interests.includes(interest)) {
                this.interests.push(interest)
            }
        },
    }
]

console.log('People:', people1)

// Imperative
function addInterestTo(person, interest) {
    if (!person.interests.includes(interest)) {
        person.interests.push(interest)
    }
}
addInterestTo(people[0], "dogs")
addInterestTo(people[1], "cats")

// Declarative
// At some point later...
people[0].addInterest("dogs")
people[1].addInterest("cats")

console.log('People:', people)

// EOF
