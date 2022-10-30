function arrayManipulations(input) {
  
  let array = input.shift().split(" ").map(Number);
  

  for (let i = 0; i < input.length; i++) {
    let [commands,firstNum, secondNum]=input[i].split(' '); 
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

    switch (commands) {
      case "Add":
        add(firstNum);
        break;
      case "Remove":
        remove(firstNum);
        break;
      case "RemoveAt":
        RemoveAt(firstNum);
        break;
      case "Insert":
        Insert(firstNum, secondNum);
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
  console.log(array.join(' '));
}
arrayManipulations([
  "4 19 2 53 6 43",

  "Add 3",

  "Remove 2",

  "RemoveAt 1",

  "Insert 8 3",
]);
