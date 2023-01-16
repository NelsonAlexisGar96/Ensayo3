//Funciones y programcion orientada a objetos

 class Person {//Una clase es una plantilla, y normalmente puede definirse como un conjunto de metodos. Es eso:
    constructor(name, lastname){ //Este constructor es un metodo, definido por variables. Pero es un metodo
        this.name = name
        this.lastname = lastname

    }

    great (){/*y este, también es un metodo. En otros lenguajes le llaman funciones, y este metodo respecto al anterior
        me devuelve algo*/
        return `Hello i am ${this.name} ${this.lastname}`


    }
 
 }
//Lo primero que hice fue crear una plantilla, que viene a ser lo mismo que un mapa -o clase, como le quieran llamar-.
 const user = new Person("Camilos", "Garcia")// Y ahora creo una instancia de esa clase anterior
 const user2 = new Person("Andrea", "Echeverry")

 console.log(user.great())//A todo lo anterior es lo que llamamos programacion orientada a objetos. 
 //R. Hello i am Camilos Garcia

////////// principios: son pautas.

//principio dela modularidad: división del trabajo

///asociacion

const jhon = new Person("jhon", "Giraldo")
const maria = new Person("Maria", "Perez")

maria.parent =jhon 
//La asociacion lo que nos dice es que existe una relacion 
//entre los objetos

console.log(maria) //Person {name: 'Maria', lastname: 'Perez', parent: Person}
console.log()

//////////

//Agregacion

/*Es practicamente una relacion entre dos objetos, 
Solo que uno funciona como un contenedor del otro


Ahora vamos a crear dos objetos con caracteristicas diferentes: 
uno de empresas y, el otro, de personas. */



const Company = {
    name : "CocaCola",
    employes : [] /*Aqui guaradaremos un arreglo de empleados vacios
    al que posteriormente le añadiremos con otros objetos.
    
Así es: serán las personas de abajo*/ 
}
 
const Jairo = new Person ("Jairo", "arrebatado")
const Manuel = new Person ("Manuel", "Molina")

Company.employes.push(Jairo) 
Company.employes.push(Manuel)
/* Ahora, el ojeto Company será un contenedor y, guardará, a sus empleados.*/

console.log(Company)
/* {name: 'CocaCola', employes: Array(2)}
employes: (2) [Person, Person]
name: "CocaCola"*/


/////////
//1er principio: Encapsulamiento: simplificar el uso de un objeto



function empresas(nombre) {/* Supon que tenemos esta funcion: la cual es un objeto. Y
Como se puede detallar tiene 1 propiedad y 2 metodos*/
    let employees = []
    this.nombre= nombre //Y empresa tendrá una propiedad llamada nombre el cual tendrá como valor el nombre que le pasen.

    this.getEmployees = function() {
        return employees
    }

    this.addEmployee = function(employee) {
        employees.push (employee)
    }//Esta funcion del arreglo de empleados me va insertar un objeto
    //Y el objeto lo van a pasar aqui como parametro.

} 


const empresa1 = new empresas("Coca Cola")/* No obstante, al crear la nueva empresa, ésta no tendrá el arreglo de empleados, pues
la hemos declarado con let*/
const empresa2 = new empresas("Pepsi")

console.log(empresa1)//Por lo que la impresión saldrá así: empresas {nombre: 'Coca Cola', getEmployees: ƒ, addEmployee: ƒ}.
//A eso le llamamos principio de encapsulamiento.
console.log(empresa2)

empresa1.addEmployee({name: "Alexis"})
empresa2.addEmployee({name:"Carlos"})
empresa1.addEmployee({name: "Felipe"})
//Es por eso que para los nuevos objetos le añadiremos los empleados con los metodos creados en la funcion.
console.log (empresa1.getEmployees())
console.log (empresa2.getEmployees())

console.log(empresa1)//Así empresa 1 tien como empleados a Alexis y Felipe.

////Herencia

/* La herencia es un poco más sencilla:
Simplemente es heredar de un objeto sus propiedades. No siendo más
la mejor forma de heredar es con clases.*/

class Person5 {//creamos la primer clase
    constructor(name, lastname){
        this.name= name
        this.lastname= lastname
    }
} 

class Programmer extends Person5 {//creamos la segunda clase
    constructor (language, name, lastname) {
        super(name, lastname);//Es un metodo que nos servirá para traer las propiedades de la clase que deseamos hereedar
        this.language= language
    }

}

const person= new Person5()
const programmer= new Programmer("python", "Carlos", "Garcia")//A la hora de la impresión, se toma el orden parametrizado del constructor

console.log(person)
console.log(programmer)
/* De esta manera programmer heredó las propiedades de person*/


////////Polimorfismo: de subtipo

function writefullname (p) {
    console.log (p.name + " " + p.lastname)

}/* Esta funcion me recibirá un objeto p, el cual puede ser cualquier tipo de dato
Y lo que me mostrará cuando la ejecute es el nombre de ese objeto y su apellido*/

writefullname(programmer)// Carlos Garcia.
