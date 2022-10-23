function theBiscuitFactory(input) {
    let numberofBiscuits = Number(input[0])
    let countOfTheWorkers = Number(input[1])
    let numberofBiscuitsfor30 = Number(input[2])

    let percentage = 0.75
    let everyDay = numberofBiscuits * countOfTheWorkers
    let everyThirdDay = everyDay * percentage

    let result = 0
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            result += everyThirdDay

        } else {
            result += everyDay
        }
    }
    console.log(`You have produced ${result} biscuits for the past month.`);

    let difference = Math.abs(result - numberofBiscuitsfor30)
    let percentbiscuots = (difference / numberofBiscuitsfor30) * 100
    let resultPersentage = percentbiscuots.toFixed(2)
    if (result > numberofBiscuitsfor30) {
        console.log(`You produce ${resultPersentage} percent more biscuits.`);
    } else {
        console.log(`You produce ${resultPersentage} percent less biscuits.`);
    }


}
theBiscuitFactory(["65",
    "12",
    "26000"])


