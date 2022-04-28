//Day-4
//Program To Calculate CGPA:-
function calcgpa() {
		var form = document.getElementById("courseform");
		var i,cgpa,c,s,u,totalUnitsAccumulated=totalUnitsTaken=0;
		var numberOfBoxes = form.box.value;
		if (error(numberOfBoxes)) {
			if (isNaN(numberOfBoxes) || numberOfBoxes.length == 0)
 { alert("Number of courses must be a number"); 
             return}			
			for (i=1; i <= numberOfBoxes; i++) {
			c = document.getElementById("code"+i).value;
			s = document.getElementById("score"+i).value;
			u = document.getElementById("unit"+i).value;
			totalUnitsAccumulated += scoreInUnitsType5(s,u);
			totalUnitsTaken += Math.floor(u);
			}
	//after getting totalunits accumulated and taken, we compute cgpa
		cgpa = totalUnitsAccumulated / totalUnitsTaken;
		alert(cgpa);
			}
	function error(x) {
			for (i=1; i <= numberOfBoxes; i++) {
			c = document.getElementById("code"+i).value;
			s = document.getElementById("score"+i).value;
       	  	u = document.getElementById("unit"+i).value;
		if ((s > 100) || (s < 0) || isNaN(s))
 { alert("Score"+i+" must be a number between 0 and 100"); 
             return false;}
		if ((s > 100) || (s < 0) || isNaN(s)) 
{ alert("Score"+i+" must be a number between 0 and 100"); 
             return false;}
		}
		return true;
		}
	function scoreInUnitsType5(score,unit) {
		if(score >= 70){ return 5*unit;}
		if(score >= 60){ return 4*unit;}
		if(score >= 50){ return 3*unit;}
		if(score >= 40){ return 2*unit;}
		if(score >= 30){ return 1*unit;}
		else{ return 0*unit;}   }
