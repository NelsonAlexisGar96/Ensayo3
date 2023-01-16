class Person1{
    constructor(name, lastname){
        this.name = name
        this.lastname = lastname

    }

    great(){
        return `Hola, yo soy ${this.name} ${this.lastname}`
    }
}

const user3 = new Person1("Nelson", "Messi")
const user4 = new Person1()

console.log(user3.great())