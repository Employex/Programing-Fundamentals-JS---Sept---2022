function NxNMatrix(number) {
    let arr=[]
    for(let i=0;i<number;i++){
        let output=''
        for(let j=0;j<number;j++){
            output+=`${number} `
        }
        arr.push(output)
    }
    console.log(arr.join('\n'));
}
NxNMatrix(3);
