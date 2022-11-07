function meetings(input){
    let info={}

    for(let el of input){
        let [weekday,name] = el.split(' ')
        if(info[weekday]){
            console.log(`Conflict on ${weekday}!`);
        }else{
            info[weekday]=name
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for(let el in info){
        console.log(`${el} -> ${info[el]}`);
    }


}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)