function arrayManipulations(input) {
  let array = input.shift().split(" ").map(Number);

  for (let i = 0; i < array.length; i++) {
    let [commands, firstNum, secondNum] = input[i].split(" ");

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (commands) {
      case "Add":
        add(elements);
        break;
      case "Remove":
        remove(num);
        break;
      case "RemoveAt":
        RemoveAt(index);
        break;
      case "Insert":
        Insert(num, index);
        break;
    }

    function add(elements) {
      return array.push(elements);
    }

    function remove(num) {
      return (array = array.filter((el) => el !== num));
    }

    function RemoveAt(index) {
      return array.splice(index, 1);
    }

    function Insert(num, index) {
      return array.splice(index, 0, num);
    }
  }
}
arrayManipulations([
  "4 19 2 53 6 43",

  "Add 3",

  "Remove 2",

  "RemoveAt 1",

  "Insert 8 3",
]);
