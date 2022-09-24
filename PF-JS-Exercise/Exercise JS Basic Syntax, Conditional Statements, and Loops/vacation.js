function vacation(people, group, week) {
    let sum = 0

    switch (week) {
        case 'Friday':

            if (group === 'Students') {
                sum = people * 8.45
                if (people >= 30) {
                    sum = sum * 0.85
                }
            } else if (group === 'Business'){
                if (people >= 100) {
                    people -= 10
                } 
                sum = people * 10.90
            } else if (group === 'Regular'){
                sum = people * 15
                if (people >= 10 && people <= 20) {
                    sum = sum * 0.95
                }
            }

            break;

        case 'Saturday':
            if (group === 'Students') {
                sum = people * 9.80
                if (people >= 30) {
                    sum = sum * 0.85
                }
            } else if (group === 'Business'){
                if (people >= 100) {
                    people -= 10
                } 
                sum = people * 15.60
            } else if (group === 'Regular'){
                sum = people * 20
                if (people >= 10 && people <= 20) {
                    sum = sum * 0.95
                }
            }

            break;

        case 'Sunday': 
        if (group === 'Students') {
            sum = people * 10.46
            if (people >= 30) {
                sum = sum * 0.85
            }
        } else if (group === 'Business'){
            if (people >= 100) {
                people -= 10
            } 
            sum = people * 16
        } else if (group === 'Regular'){
            sum = people * 22.50
            if (people >= 10 && people <= 20) {
                sum = sum * 0.95
            }
        }

        break;
    }
    console.log(`Total price: ${sum.toFixed(2)}`);
}
vacation(30,
    "Students",
    "Sunday"
)