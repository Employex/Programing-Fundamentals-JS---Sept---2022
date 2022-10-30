function f(num) {
  let nums_names = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  let num_as_string = num.toString();
  let last = num_as_string[num_as_string.length - 1];
  console.log(nums_names[last]);
}

f(519);
// switch(last){

//     case '0':console.log('zero');break;
//     case '1':console.log('one');break;
//     case '2':console.log('two');break;
//     case '3':console.log('three');break;
//     case '4':console.log('four');break;
//     case '5':console.log('five');break;
//     case '6':console.log('six');break;
//     case '7':console.log('seven');break;
//     case '8':console.log('eight');
//     case '9':console.log('nine')

//   }
