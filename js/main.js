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


//get an array of items that cost between $14.00 and $18.00 USD

// function filterLongWords(words, i){
//     return words.filter(function(currentWord) {
//       return currentWord.length > i;
//     });
// }


// function charFreq(string){
//     return string.split('').reduce(function(memo, char){
//       if (memo[char]) {
//         memo[char] = memo[char] + 1;
//       } else {
//         memo[char] = 1;
//       }
//       return memo;
//     }, {});

var midPriceArray = items.filter(function(item) {
	if (14 < item['price'] && item['price'] < 18)
	return item;

}).map(function(item){
	return item['title'];
});

var ans2 = document.querySelector('.wrapper div:nth-child(2) .answer');
ans2.textContent = midPriceArray;




///////////////////////////////////

//Which item has a "GBP" currency code? Display it's name and price.

var gbpArray = items.filter(function(item) {
	if (item["currency_code"] === "GBP")
	return item;

}).map(function(item){
	return "Title: " + item['title'] + ", Price: " + item['price'];
});

var ans3 = document.querySelector('.wrapper div:nth-child(3) .answer');
ans3.textContent = gbpArray;



///////////////////////////////////

//Display a list of all items who are made of wood.

var woodenItems = items.filter(function(item){
	if (item.materials.indexOf('wood') > -1) {
		return item;
	}
}).map(function(item){
	return " Title: " + item['title'] + " ";
});

var ans4 = document.querySelector('.wrapper div:nth-child(4) .answer');
ans4.textContent = woodenItems;



///////////////////////////////////

//Which items are made of eight or more materials? Display the name, number of items and the items it is made of.


var eightOrMoreMaterials = items.filter(function(item){
	if (item.materials.length >= 8) {
		return item;
	}
}).map(function(item){
	return " Title: " + item['title'] + " is made of " + item['materials'].length + " items. The items are " + item['materials'];
});

var ans5 = document.querySelector('.wrapper div:nth-child(5) .answer');
ans5.textContent = eightOrMoreMaterials;



///////////////////////////////////

//How many items were made by their sellers?





