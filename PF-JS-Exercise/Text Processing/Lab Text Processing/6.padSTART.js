function pad(){
  let bite = ['100','11','001','1111','11111111']  
  for(let bit of bite){
    let result = bit.padStart(8,'0')
    console.log(result);
  }
}
pad()