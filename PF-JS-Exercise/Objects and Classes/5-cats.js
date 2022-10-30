function cats(array){
    class Cat{
        constructor(name,age){
            this.name = name
            this.age = age
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(const element of array){
        let arg = element.split(' ')
        let name = arg[0]
        let age = arg[1]

        let cat = new Cat(name, age)
        cat.meow()
    }

}
cats(['Mellow 2', 'Tom 5'])