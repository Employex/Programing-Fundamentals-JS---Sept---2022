function train(array) {
  let pasengersInTrain = array.shift().split(" ").map(Number);

  let maxCapasity = Number(array.shift());

  for (let index = 0; index < array.length; index++) {
    let currentRow = array[index].split(" ");

    if (currentRow[0] === "Add") {
      let newWagon = Number(currentRow[1]);
      pasengersInTrain.push(newWagon);
    } else {
      for (let j = 0; j < pasengersInTrain.length; j++) {
        let currentWagon = pasengersInTrain[j];
        if (currentWagon + Number(currentRow[0]) <= maxCapasity) {
          pasengersInTrain[j] += Number(currentRow[0]);
          break;
        }
      }
    }
  }
  console.log(pasengersInTrain.join(' '));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
