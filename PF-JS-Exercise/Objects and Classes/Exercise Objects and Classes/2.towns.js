function towns(array){
  let list = {}

  for(let line of array){
    let [town,latitude,longitude]=line.split(' | ')
    list.town = town
    list.latitude = Number(latitude).toFixed(2)
    list.longitude = Number(longitude).toFixed(2)
    console.log(list);
  }
  

}
towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625'])