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







