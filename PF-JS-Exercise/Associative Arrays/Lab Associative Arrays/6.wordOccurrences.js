function wordOccurrences(array) {
    let words = {}

    for (let word of array) {
        let currentWord = word.split(' ')
        if (!words[currentWord]) {
            words[currentWord] = 0
        }
        words[currentWord]++
    }
    let entries = Object.entries(words).sort((a, b) => b[1] - a[1])

    for (let [word, count] of entries) {
        console.log(`${word} -> ${count} times`);
    }

}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])