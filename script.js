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
//console.log(result);

/*10) double the even number  */

var arr=[1,2,3,4,5,6,7,8,9,10];

var result=arr.filter((val,index)=>{
    return val%2==0;
}).map((val,index)=>{
    val= val * 2;
    return val;
});
//console.log(result);

/*11) Elements greater than 10  */

var arr=[2,3,4,5,10,30,40,2,3,4,5];

var rsult=arr.filter((val,index)=>{
   return val > 10; 
});
//console.log(rsult);

/*12) Employe salary greater than 50000  */
var data=[
    {
        name:"Arslan Shakeel",
        age: 28,
        salary:80000
    },
    {
        name:"Junaid",
        age: 26,
        salary:56000
    },
    {
        name:"Usman",
        age: 32,
        salary:78000
    },
    {
        name:"Naem",
        age: 33,
        salary:90000
    },
    {
        name:"Khalid",
        age: 55,
        salary:56000
    },
    {
        name:"Nouman",
        age: 23,
        salary:33000
    },
    {
        name:"Saad",
        age: 43,
        salary:45000
    },
    {
        name:"Raja Shaheen",
        age: 28,
        salary:90000
    }
];

var result=data.filter((val,index)=>{
    return val.salary > 50000;
});
//console.log(result);

//* 13) return the employee with name Arslan Shakeel

var result=data.filter((val,index)=>{
    return val.name ==="Arslan Shakeel";
});
//console.log(result);

//* 14) Employe with age greater than 30

var result=data.filter((vak,index)=>{
    return vak.age > 30;
});
//console.log(result);

//* 15) Remove Duplicate item in an array

var dub_array=[20,3,4,5,6,7,8,9,7,7,1,1,2,2,6,30,100];

var result=dub_array.filter((val,index,source_array)=>{
    
    var b= source_array.indexOf(val)==index;
    return b;
});
console.log(result);