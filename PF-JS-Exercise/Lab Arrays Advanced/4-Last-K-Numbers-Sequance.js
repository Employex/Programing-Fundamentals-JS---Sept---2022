function lastKNumbersSequence(length, k) {
  let sequance = [1];

  for (let i = 1; i < length; i++) {
    let index = Math.max(sequance.length - k, 0);

    let lastNumber = sequance.slice(index);
    sum = 0;

    for (const element of lastNumber) {
      sum += element;
    }

    sequance.push(sum);
  }
  console.log(sequance.join(' '));
}
lastKNumbersSequence(6, 3);
