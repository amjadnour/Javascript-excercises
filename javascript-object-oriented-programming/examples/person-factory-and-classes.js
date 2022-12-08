// A factory function version of making a Person.
// This is the code we want to change into a class (from the slides)
function createPerson(name) {
    return {
        name: name,
        interest: [],
        addInterest: function (interest) {
            this.interests.push(interest)
        },
    }
}

const alice = createPerson('alice', 'Being 2021 we do not care')
alice.addInterest('cats')

// This is the Class version of the above
class Person {
    name
    _interests = [] // indicates private by convention

    constructor(newName) {
        this.name = newName
    }

    getName() {
        return this.name
    }

    getAllInterests() {
        return this._interests
    }

    addInterest(newInterest) {
        this._interests.push(newInterest)
    }
}

const michael = new Person('michael')

// we can do this BUT the underscore indicates that we should not :-) 
michael._interests = ["wine gums", "biscuits", "tea", "dogs",]
// and/or we should NOT do this, but can
michael._interests.push("biscuits")

// But this is ok:
michael.addInterest("biscuits")

console.log('Michael:', michael)
