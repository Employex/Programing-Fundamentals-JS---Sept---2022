function inventory(array) {
    let everyhero = []

    for(let ele of array){
        let [name,level,item] = ele.split(' / ')
        let hero={
            name,
            level:Number(level),
            item,

        }
        everyhero.push(hero)
    }
    everyhero.sort((a,b)=>a.level-b.level)
    console.log(everyhero);

    // for(let el of everyhero){
    //     console.log(`Hero: ${el.name}`);
    //     console.log(`level => ${el.level}`);
    //     console.log(`items => ${el.item}`);



    // }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",

  "Derek / 12 / BarrelVest, DestructionSword",

  "Hes / 1 / Desolator, Sentinel, Antara",
]);
