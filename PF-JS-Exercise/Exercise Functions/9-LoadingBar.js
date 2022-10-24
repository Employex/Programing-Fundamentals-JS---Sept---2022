function loadingBar(number){
    let percentCounter='%'.repeat(number/10)
    let dotsCounter = '.'.repeat(10-percentCounter.length)

    if(number===100){
        console.log(`${number}% Complete!`);
    }else if(number<100){
        console.log(`${number}% [${percentCounter}${dotsCounter}]`);
        console.log('Still loading...');
    }

}
loadingBar(70)
