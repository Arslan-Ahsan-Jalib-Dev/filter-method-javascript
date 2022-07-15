//************ Filter Array Method in Javascript ***********//

/*1) Return Positive numbers */

var arr=[1,2,-1,-6,3,4,5];

var result=arr.filter((val,index)=>{
    return val > 0;
});
//console.log(result);

/*2) Get characters with mass greater than 100 */

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

var result=characters.filter((val,index)=>{
    return val.mass > 100;
});
//console.log(result);

/*3) Get characters with height less than 200 */

var result=characters.filter((val,index)=>{
    return val.height < 200;
});
//console.log(result);

/*4) Get all male characters*/

var result=characters.filter((val,index)=>{
    return val.gender === 'male';
});
//console.log(result);

/*5) Get all female characters*/
var result=characters.filter((val,index)=>{
    return val.gender === 'female';
});
//console.log(result);

/*6) Even Number in the array*/

var arr=[1,2,3,4,5,6,7,8,9,10];

var result=arr.filter((val,index)=>{
    return val%2==0;
});
//console.log(result);

/*7) Get only values */

var arr=[5,4,undefined,8,9,null];

var result=arr.filter((val,index)=>{
    return val;
});
//console.log(result);

/*8) Get not values */

var result=arr.filter((val,index)=>{
    return !(val);
});
//console.log(result);

/*9) Return strings work in array with out space in any index */

var a="It was a dark and stormy night ";

var result=a.split(" ").filter((val,index)=>{
    return val !=="";
});
console.log(result);
