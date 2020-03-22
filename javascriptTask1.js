//this is my name
var name="oladele tobiloba emmanuel";
//this is an array of all my courses
var courses=["html","css","Javascript"];

console.log("name: "+ name);
console.log("Courses: "+courses);
//this is print a list of odd numbers
if(courses.length%2!=0){
    console.log("All odd numbers between 1 and 200:");
    for(var i=1;i<=200;i++){
        if(i%2 !=0){
            console.log(i);
        }
    }
}
else {
    console.log("All even numbers between 1 and 200:");
    for(var j=1;j<=200;j++){
        if(j%2===0)
        console.log(j)
    }
}