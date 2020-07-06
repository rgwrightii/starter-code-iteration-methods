// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKataHeading (parentElement, kataNumber) {
    const kata1Heading = document.createElement("h1")
    kata1Heading.append("KATA " + kataNumber)
    parentElement.append(kata1Heading)
}

function printObject (parentElement, object) {
    const stringifiedObject = JSON.stringify(object)
    parentElement.append(stringifiedObject)
}


printKataHeading(main, 0)
const greenEyes1 = users.filter(user => user.eyeColor === "green")
printObject(main, greenEyes1)

printKataHeading(main, 1)
const activeUser = users.filter(user => user.isActive === true)
printObject(main, activeUser)

printKataHeading(main, 2)
const newMap = users.map(user => user.email)
printObject(main, newMap)

printKataHeading(main, 3)
const someCompany = users.some(user => user.company === "OVATION")
printObject(main, someCompany)

printKataHeading(main, 4)
const find38 = users.find(user => user.age > 38)
printObject(main, find38)

printKataHeading(main, 5)
const filterFind = users
.filter(user => user.isActive === true)
.find(user => user.age > 38)
printObject(main, filterFind)

printKataHeading(main, 6)
const filterMap = users
.filter(user => user.company === "ZENCO")
.map(user => user.balance)
printObject(main, filterMap)

printKataHeading(main, 7)
const filterIncludesMap = users
.filter(user => user.tags.includes("fugiat"))
.map(user => user.age)
printObject(main, filterIncludesMap)
