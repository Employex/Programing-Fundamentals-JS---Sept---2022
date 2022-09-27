function rightplce(string,char,result){
    let res = string.replace('_',char);
    let output = res===result ?
    'Matched':
    'Not Matched';
    console.log(output); 
}
rightplce('Str_ng', 'I','Strong')
