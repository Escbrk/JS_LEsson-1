const myUser = {
    name: 'Max',
    age: 23,
    phoneNumber: 654654654
}

const name = `{"name": "Mango"}`

const str = JSON.stringify(myUser);
console.log(str)
console.log(JSON.parse(str))
console.log(JSON.parse(name))