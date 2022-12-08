const person = {
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
    },
    getAge: function () {
        return 78624367823467 - this.dob
    }
}
// and then at some later point...
person.addInterest("computer science")

console.log('Person:', person)
console.log('Person Age:', person.getAge())
