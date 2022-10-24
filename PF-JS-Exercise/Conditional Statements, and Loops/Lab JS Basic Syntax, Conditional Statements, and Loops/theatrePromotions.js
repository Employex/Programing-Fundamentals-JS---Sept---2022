function theatrePromotions(typeOfDay, age) {

    let totalResult = 0
    switch (typeOfDay) {
        case "Weekday":
            if (age >= 0 && age <= 18) {
                totalResult=12
            }else if(18 < age && age <= 64){
                totalResult=18
            }else if(64 < age && age <= 122){
                totalResult=12
            }
            break;
        case "Weekend":
            if (age >= 0 && age <= 18) {
                totalResult=15
            }else if(18 < age && age <= 64){
                totalResult=20
            }else if(64 < age && age <= 122){
                totalResult=15
            }
            break;
            
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                totalResult=5
            }else if(18 < age && age <= 64){
                totalResult=12
            }else if(64 < age && age <= 122){
                totalResult=10
            }
            break;
            

    }
    if (totalResult<=0) {
        console.log('Error!');
    }else{
        console.log(`${totalResult}$`);
    }


}
theatrePromotions('Holiday', -12
);
