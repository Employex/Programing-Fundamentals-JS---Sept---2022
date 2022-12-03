function race(input) {
    let raceLine = input.shift().split(", ");

    let raceObject = {};

    let patternName = /[A-Za-z]+/gm;
    let patternDistance = /[0-9]+/gm;

    let command = input.shift();

    while (command !== "end of race") {
        let currentName = command.match(patternName).join('')
        let currentDistance = command.match(patternDistance).join('')

        if (raceLine.includes(currentName)) {
            let distance = 0

            for (const digit of currentDistance) {
                distance += Number(digit)
            }

            if (!raceObject.hasOwnProperty(currentName)) {
                raceObject[currentName] = distance
            } else {
                raceObject[currentName] += distance
            }
        }

        command = input.shift();
    }
    let sortedObject = Object.entries(raceObject).sort((a, b) => b[1] - a[1])

    let first = sortedObject[0][0]
    let second = sortedObject[1][0]
    let third = sortedObject[2][0]

    console.log(`1st place: ${first}`);
    console.log(`2nd place: ${second}`);
    console.log(`3rd place: ${third}`);
}

race([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@ ",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race",
]);
