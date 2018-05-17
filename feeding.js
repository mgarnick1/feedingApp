// JavaScript source code
'use strict'
var weight = prompt("What is your child's weight in kilograms");
var kcalorie = prompt("Please choose the ounces per day your child requires: 90, 100, 110");

function results(weight, calorie) {
    return weight * kcalorie;
}

alert("Your child should have " + results(weight, kcalorie) + " milliliters per day");