//script for lab 8
var items = [ 
	{name: "beans",					price: 0.99,		tax: false},
	{name: "rice", 					price: 3.99,		tax: false},
	{name: "flour", 				price: 1.99,		tax: false},
	{name: "truffle oil", 			price: 7.25,		tax: false},
	{name: "spinach", 				price: 2.00,		tax: false},
	{name: "artichokes", 			price: 2.50,		tax: false},
	{name: "rotisserie chicken",	price: 5.99,		tax: false},
	{name: "almonds", 				price: 9.99,		tax: true}	
];
	
	items.forEach(function(item){	
		var food = document.createElement("li");
			food.innerHTML = item.name + " $" + item.price.toFixed(2);
			list.appendChild(food);	
});

var runningTotal = 0;
	items.forEach(function(item) {	
		runningTotal += item.price; //price of each grocery
		document.getElementById("total").innerHTML = "$" + runningTotal.toFixed(2);
});

console.log ("$" + runningTotal.toFixed(2));
			 		 
	
// In Michigan sales tax is not actually collected on groceries, but may be used in this exercise regardless
