function CharactersInRange(char1, char2) {
  let charToNumber1 = Math.min(char1.charCodeAt(),char2.charCodeAt());
  let charToNumber2 = Math.max(char1.charCodeAt(),char2.charCodeAt());
  let output = "";

  for (let i = charToNumber1 + 1; i < charToNumber2; i++) {
    let singleChar = String.fromCharCode(i);
    output += `${singleChar} `;
  }
  console.log(output);
}
CharactersInRange(":", "#");
