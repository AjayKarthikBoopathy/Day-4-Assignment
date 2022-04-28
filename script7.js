//Day-4
//Get the first item, the middle item and the last item of the array:-
var friends1 = [
"Mari","MaryJane","CaptianAmerica","Munnabai","AAK chandran"
];

var f =friends1[0];
console.log("First Name:",f);
var l=friends1.length-1;
l = friends1[l];
console.log("Last Name:",l);

if(friends1.length%2!==0){
var m =(friends1.length/2);
m=Math.round(m);
m=m-1;
m=friends1[m];
console.log("Middle Name:",m);
}
else{
  console.log("Array contains even number of elements");
}


//Add your name to the end of the friends array, and add another name to beginning:-
var friends1 = [
"Mari","MaryJane","CaptianAmerica","Munnabai","AAK chandran"
];

friends1.splice(0,0,"Ajay");
console.log(friends1);
friends1.splice(friends1.length,0,"Karthik");
console.log(friends1);

