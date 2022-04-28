//Day-4
//Volume Of Sphere:-
let r = prompt('Enter the Radius: ');
var volume= 4/3 * (3.14)*r^3;
console.log(volume);

//Area of a triangle:-
let b = prompt('Enter the Breadth: ');
let h = prompt('Enter the Height: ');
var area=(b*h)/2;
console.log(area);

//Area of a Isoceles triangle:-
let b = prompt('Enter the Breadth: ');
let h = prompt('Enter the Height: ');
var area=(b*h)/2;
console.log(area);

//Give the Actual cost and Sold cost, Calculate Discount Of Product:-
let actualCost = prompt('Enter the Original Price: ');
let soldCost = prompt('Enter the Sold Price: ');
var discount = 100 * (actualCost - soldCost) /actualCost;
discount = discount.toFixed(0);
console.log(discount);
