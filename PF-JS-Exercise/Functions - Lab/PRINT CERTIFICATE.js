function printCertificate(grade, names) {
    let fullName = currentName(names)

    let formattedGrade = formatGrade(grade)

    if (pass(grade)) {
        printHeader()
        console.log(fullName);
        console.log(formattedGrade);
    }
}

function currentName(names) {
    return `${names[0]} ${names[1]}`;
}

function pass(grade) {

    return grade >= 3

}

function printHeader() {
    console.log('~~~-   {@}   -~~~');
    console.log('~- Certificate -~');
    console.log('~~~-  ~---~  -~~~');
}



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
        return `${ggrade} (2)`;
    } else {
       return `${ggrade} (${grade.toFixed(2)})`;
    }
}

printCertificate(5.25, ['Peter', 'Carter']);
