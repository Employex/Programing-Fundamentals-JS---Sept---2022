function houseParty(array) {
  let guestArray = [];
  for (let i = 0; i < array.length; i++) {
    let name = array[i].split(" ");

    if (name.length === 3) {
      if (guestArray.includes(name[0])) {
        console.log(`${name[0]} is already in the list!`);
      } else {
        guestArray.push(name[0]);
      }
    } else {
      if (!guestArray.includes(name[0])) {
        console.log(`${name[0]} is not in the list!`);
      } else {
        let absent = guestArray.indexOf(name[0]);
        guestArray.splice(absent, 1);
      }
    }
  }
  console.log(guestArray.join("\n"));
}
houseParty([
  "Tom is going!",

  "Annie is going!",

  "Tom is going!",

  "Garry is going!",

  "Jerry is going!",
]);
