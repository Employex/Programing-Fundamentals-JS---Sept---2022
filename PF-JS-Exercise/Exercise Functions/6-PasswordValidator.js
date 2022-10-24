function PasswordValidator(password) {
  let digitCounter = 0;
  let passwordLength = password.length;
  let isSymbol = true;

  for (let i = 0; i < passwordLength; i++) {
    let currentIndex = password[i].charCodeAt();

    let isDigit = currentIndex >= 48 && currentIndex <= 57;
    let smallNum = currentIndex >= 97 && currentIndex <= 122;
    let bigNum = currentIndex >= 65 && currentIndex <= 90;

    if (isDigit) {
      digitCounter++;
    }

    if (!isDigit && !smallNum && !bigNum) {
      isSymbol = false;
    }
  }

  if (password.length < 6 || password.length > 10) {
    console.log("Password must be between 6 and 10 characters");
  }
  if (!isSymbol) {
    console.log("Password must consist only of letters and digits");
  }
  if (digitCounter < 2) {
    console.log("Password must have at least 2 digits");
  }
  if (
    !(digitCounter < 2) &&
    isSymbol &&
    password.length >= 6 &&
    password.length <= 10
  ) {
    console.log("Password is valid");
  }
}
PasswordValidator("Pa$s$s");
