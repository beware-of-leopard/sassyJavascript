//Show me how to calculate the average price of all items.

//The average price is $23.63


var total = items.reduce(function(memo, item){
			return memo += item["price"];
		}, 0);

// var avg = total / items.length;

var avg = (Math.round((total / items.length) * 100) / 100);
var ans1 = document.querySelector('.wrapper div:first-child .answer');

ans1.textContent = avg;




///////////////////////////////////


