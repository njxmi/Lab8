//script for lab 8
var items = [ 
	{name: "beans", 					price: 0.99},
	{name: "rice", 					    price: 3.99},
	{name: "flour", 				    price: 1.99},
	{name: "truffle oil", 			  	price: 7.25},
	{name: "spinach", 				    price: 2.00},
	{name: "artichokes", 			    price: 2.50},
	{name: "rotisserie chicken",		price: 5.99},
	{name: "almonds", 				    price: 9.99},	];


//this loop is only displaying the last item (almonds)	
/*items.forEach(function(item){
		
		document.getElementById("list").innerHTML = item.name + " $" + item.price.toFixed(2) + " each";
		// for lab 8, add a <li>___</li>
	});*/
	

var beans = document.createElement("li");
beans.innerHTML = "can of beans";
list.appendChild(beans);

var rice = document.createElement("li");
rice.innerHTML = "1 lb of rice";
list.appendChild(rice);

var flour = document.createElement("li");
flour.innerHTML = "1 lb of flour";
list.appendChild(flour);

var truffleOil = document.createElement("li");
truffleOil.innerHTML = "truffle oil";
list.appendChild(truffleOil);

var spinach = document.createElement("li");
spinach.innerHTML = "spinach";
list.appendChild(spinach);

var artichokes = document.createElement("li");
artichokes.innerHTML = "artichokes";
list.appendChild(artichokes);

var roChicken = document.createElement("li");
roChicken.innerHTML = "rotisserie chicken";
list.appendChild(roChicken);

var almonds = document.createElement("li");
almonds.innerHTML = "1lb of almonds";
list.appendChild(almonds);


	var runningTotal = 0;
	items.forEach(function(item) {	
	
		runningTotal += item.price; //price of each grocery
		document.getElementById("total").innerHTML = "$" + runningTotal.toFixed(2);
	});
			console.log ("$" + runningTotal.toFixed(2));
			// for lab 8, set the HTML inside total		 		 
	
/* In Michigan sales tax is not actually collected on groceries, but may be used in this exercise regardless
*/