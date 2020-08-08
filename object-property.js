const student = [
    {id: 22,name: 'nazim'},
    {id: 14,name: 'monirul'},
    {id: 14,name: 'imran'}, 
    {id: 18,name: 'joy'},

];
const names = student.map( s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter( s => s.id>20);
const biggerOne = student.find( s => s.id>13);


console.log(biggerOne);
