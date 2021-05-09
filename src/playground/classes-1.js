class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGretting() {
        return `Hi, I am ${this.name}!!`
    }

    getDescripcion() {
        return `${this.name} is ${this.age} year(s) old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }
    getDescripcion() {
        let descripcion = super.getDescripcion()
        if (this.hasMajor()) {
            descripcion += ` their major is ${this.major}`
        }
        return descripcion
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGretting() {
        let gretting = super.getGretting()
        if (this.homeLocation) {
            gretting += `. I am visiting from New York`
        }
        return gretting
    }
}

const me = new Traveler('Athos Shopenhauer', 30, 'Computer Science')
console.log(me.getGretting())

const other = new Traveler()
console.log(other.getGretting())