// Soal 1
// Jawaban soal 1
class Animal {
    constructor(name) {
        this.name = name
        this.legs = 4
        this.cold_blooded = false
    }
}


var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//Soal 2 
// Jawaban soal 2

class Frog {
    constructor(name) {
        this.name = name
        this.legs = 4
        this.cold_blooded = false
    }
}

class Ape {
    constructor(name) {
        this.name = name
        this.legs = 2
        this.yell = "Auooo"
        this.cold_blooded = false
    }

}
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 