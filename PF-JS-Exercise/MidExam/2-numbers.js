function numbers(input) {

    let array = input.shift().split(' ')

    let count = 0
    let inputRow = input[0]
    let command = inputRow.split(' ')[0]
    let value = inputRow.split(' ')[1]
    let value2 = 0

    if (inputRow.split(' ').length > 2) {
        value2 = inputRow.split(' ')[2]
    }
    while (command !== 'Finish') {
        switch (command) {
            case 'Add': array.push(value);
                break;
            case 'Remove':
                let index = array.indexOf(value)
                if (index > -1) {
                    array.splice(index, 1)
                }

                break;
            case 'Replace':
                let index1 = array.indexOf(value)
                if (index1 > -1) {
                    array[index1] = value2
                }

                break;
            case 'Collapse':
                array = array.filter(e => Number(e) > Number(value))
                break;

        }
        count++
        let nextCommand = input[count]
        command = nextCommand.split(' ')[0]
        value = nextCommand.split(' ')[1]

        if (nextCommand.split(' ').length > 2) {
            value2 == nextCommand.split(' ')[2]
        }
    }
    console.log(array.join(' '));


}
numbers(["5 9 70 -56 9 9",
"Replace 9 10",
"Remove 9",
"Finish"])

