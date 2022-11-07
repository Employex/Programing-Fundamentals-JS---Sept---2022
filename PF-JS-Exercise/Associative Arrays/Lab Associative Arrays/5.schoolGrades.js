function schoolGrades(array){
    let student = {}
    for(let line of array){
        let studentArr = line.split(' ')
        let name = studentArr.shift()
        let grades = studentArr.map(x=>Number(x))

        if(student[name]){
            student[name]=student[name].concat(grades)
        }else{
            student[name]=grades
        }
    }
    let entries = Object.entries(student)
    let sorted = entries.sort((a,b)=>a[0].localeCompare(b[0]))
    
    for(let [name,grades] of sorted){
        let sum=0

        for(let grade of grades){
            sum+=grade
        }

        let average = sum/grades.length

        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
)