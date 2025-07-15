function studentPerformanceAnalyzer(students){
    return {
        myMap:function(logic){
            let result=[];
            for(let student of students){
                result.push(logic(student));
            }
            return result;
        },
        myFilter:function(logic){
            let result=[];
            for(let val of students){
                if(logic(val)){
                    result.push(val);
                }
            }
            return result;
        },
        myReduce(logic,initial){
            let start=initial;
            for(let val of students){
                start=logic(val,start);
            }
            return start;
        }
    }
};
const students=[
    {name:"Ayush",marks:95},
    {name:"Shobhit",marks:45},
    {name:"Aakash",marks:13}
]
const analyzer=studentPerformanceAnalyzer(students);
const names=analyzer.myMap((student)=> student.name);
console.log(`student name->${names}`);

const passed=analyzer.myFilter((student)=>student.marks >=50);
console.log(`Passed studen->${JSON.stringify(passed)}`);

const totalMarks=analyzer.myReduce((student,sum)=>sum+student.marks,0);
console.log(`Total marks=>${totalMarks}`);