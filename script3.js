//Day-4
//Calculate five test scores and print their average:-
var sum=0;
  var n;
   var txt="Average of numbers: ";
        for(var i=0;i<5;i++){
            n=parseInt(prompt("Enter the number", "0"));
            sum=sum + n;
            txt += n+"  ";
        }
        document.write(txt+" is <B>"+(sum/5)+"</B>")
