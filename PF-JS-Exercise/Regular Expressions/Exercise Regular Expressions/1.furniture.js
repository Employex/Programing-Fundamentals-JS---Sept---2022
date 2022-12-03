function furniture(input) {
    index = 0
    let sum = 0
    let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+[.]*\d+)!(?<quantity>\d+)/g

    console.log('Bought furniture:');

    while (input[index] !== 'Purchase') {
        let productRow = input[index]
        let validProduct = pattern.exec(productRow)

        while (validProduct !== null) {
            let productName = validProduct.groups.name
            console.log(productName);
            let productPrice = validProduct.groups.price
            let productQuantity = validProduct.groups.quantity

            sum += productPrice * productQuantity

            validProduct = pattern.exec(productRow)
        }

        index++
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`);

}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)