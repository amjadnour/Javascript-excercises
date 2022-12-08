// Example

const person1 = {
    name: "Alice",
    dob: new Date(1990, 07, 07),
    interests: [
        "plants",
        "rugby",
        "guitar",
    ],
}
console.log('Person1:', person1)

function getAge () {
    return new Date().getFullYear() - person1.dob.getFullYear()
}

function addInterest(interest) {
    if (!person1.interests.includes(interest)) {
        person1.interests.push(interest)
    }
}

// At some point later...
addInterest("dogs")
console.log('Person1:', person1)
console.log('Person1 age:', getAge(person1))

// EOF
