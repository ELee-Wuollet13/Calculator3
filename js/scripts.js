
//Business Logic

var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

// User interface

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var result = add(number1, number2);
		$("#outputA").text(result);
	});
});

$(document).ready(function() {
	$("form#subtract").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var result = subtract(number1, number2);
		$("#outputS").text(result);
	});
});

$(document).ready(function() {
	$("form#multiply").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var result = multiply(number1, number2);
		$("#outputM").text(result);
	});
});

$(document).ready(function() {
	$("form#divide").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#num1").val());
		var number2 = parseInt($("#num2").val());
		var result = divide(number1, number2);
		$("#output").text(result);
	});
});
