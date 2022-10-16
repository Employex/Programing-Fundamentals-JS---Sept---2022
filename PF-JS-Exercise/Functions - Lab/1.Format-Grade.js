function formatGrade(grade) {
    let ggrade = ''

    if (grade < 3.00) {
        ggrade = 'Fail'
    } else if (grade < 3.50) {
        ggrade = 'Poor'
    } else if (grade < 4.50) {
        ggrade = 'Good'
    } else if (grade < 5.50) {
        ggrade = 'Very good'
    } else {
        ggrade = 'Excellent'
    }

    if (ggrade == 'Fail') {
        console.log(`${ggrade} (2)`);
    } else {
        console.log(`${ggrade} (${grade.toFixed(2)})`);
    }
}
formatGrade(2.99);