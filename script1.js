//Day-4
//Qn1)How to compare two JSON have the same properties without order?
//  	a) var obj1 = { name: "Person 1", age:5 };
//  	b) var obj2 = { age:5, name: "Person 1" };

//Answer:
const object1 = {
  name: 'ABC',
  address: 'India'
};
 const object2 = {
  address: 'India',
  name: 'ABC'
};
JSON.stringify(object1) === JSON.stringify(object2)   // false
//Note:By using Lodash library,
JSON.isEqual(object1, object2)   // true

