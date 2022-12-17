[2,3,6,78,99,104,23].reduce((max, currNum) => {
    return Math.max(max, currNum);
});

[1,2,3,4,5].forEach((n) => {
        console.log(n * 10)
});

// greet is an example of a function without perameters

const greet = () => {
    console.log('HELLO!!!');

};


// Ex of not needing to write "return"

[1,2,3,4,5,6].filter(function(num){
    return num % 2 === 0;

});

[1,2,3,4,5,6].filter((num) => num % 2 === 0);

const double = (n) => n * 2;

// where this wouldnt work

[1,2,3,4,5,6,7,8].map((n) => {
    if(n % 2 === 0) {
        return "even";
    }
    return "odd";
});

// rewrite it like this 

[1,2,3,4,5,6,7,8].map((n) => n % 2 === 0 ? 'even' : 'odd')


// sum each sub array and turn that into a new array
const dailyRainTotals = [[1,2, 0.35, 2.2],[1,7, 0.6, 0.1],[2.5, 0.9, 1.5]];


// combine map and reduce to reduce each sub array by summing each element and use map to call reduce on each sub array

dailyRainTotals.map((hourlyRainTotals) => {
    return hourlyRainTotals.reduce((sum, inchesOfRain)=> {
        return sum + inchesOfRain;
    })
})

dailyRainTotals.map((hourlyRainTotals) => 
hourlyRainTotals.reduce((sum, inchesOfRain)=> sum + inchesOfRain))



// Run into problems when you try and return an object with a arrow function  

const makeMath = (num) => 
{
    square : num * num,
    double : num * 2
};

// JavaScript errors here beacuse we are using an explicit return with and arrow function
// and returnng an object. JS thinks the first curly brace is the start of the function
// when in reality it is the start of the object we are trying to return

// we wrap the object in () and the arrow function will now work

const makeMathCorrectly = (num) => 
({
    square : num * num,
    double : num * 2
});



// Run into problems when using the method "this". When usinging arrow functions

const cat = {
    name : 'bubs',
    eat  : function() {
        console.log(this);
        return `${this.name} chows down`;
    },
    meow : () => {
        console.log(this);
        return `${this.name} says MEOW!!`
    }
}

// in this example the methods "this" is reffering to different things when used in an arrow function 
// and a normal function. In the normal function "this" is reffering to "name" which is the value
// of the key. in the arrow function "this" is reffering to the "window".




