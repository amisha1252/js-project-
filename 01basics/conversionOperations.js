
// Number conversion
// "33"=> 33
// "33abc"=> NaN
// true=>1 , false => 0

// NaN -> Not a number

// boolean conversion
// 1=> true
// ""=> false
// 0=>false
// "amisha"=>true
// null=> false



// let score = 33
// console.log(typeof(score)); //number
// let score1 ="33";
// console.log(typeof(score1));//string
// let valueInNumber = Number (score); //number conversion
// console.log(typeof(valueInNumber));


//  now let say a = 33abc convert this into a number and see the type of it
//  let a = "33abc";
//  console.log(a);
//  console.log(typeof (a));
// // after conversion it will still show type number but after printing NaN is shown
//  let valueInNumber = Number (a);
//  console.log(typeof(valueInNumber));//number
//  console.log((valueInNumber));//NaN


// let score = null;
// let valueInNumber = Number (score);
// console.log(typeof(valueInNumber));//number
//  console.log((valueInNumber));// 0


// let score = undefined;
// let valueInNumber = Number (score);
// console.log(typeof(valueInNumber));//number
//  console.log((valueInNumber));// NaN

 
// let score = "amisha"; //string
// console.log(typeof(score));
// let valueInNumber = Number (score);
// console.log(typeof(valueInNumber));//number
//  console.log((valueInNumber));// NaN




// let score = true; //boolean
// console.log(typeof(score));
// let valueInNumber = Number (score);
// console.log(typeof(valueInNumber));//number
//  console.log((valueInNumber));// NaN


// let isLoggedIn = 1; 
// let booleanIsLoggenIn =  Boolean(isLoggedIn);
// console.log(typeof(booleanIsLoggenIn));
//  console.log((booleanIsLoggenIn));



//  let isLoggedIn = ""; 
// let booleanIsLoggenIn =  Boolean(isLoggedIn);
// console.log(typeof(booleanIsLoggenIn));
//  console.log((booleanIsLoggenIn));




// let isLoggedIn =null ; 
// let booleanIsLoggenIn =  Boolean(isLoggedIn);
// console.log(typeof(booleanIsLoggenIn));
//  console.log((booleanIsLoggenIn)); //false



// let isLoggedIn = undefined; 
// let booleanIsLoggenIn =  Boolean(isLoggedIn);
// console.log(typeof(booleanIsLoggenIn));
//  console.log((booleanIsLoggenIn));//false


// string Conversion

// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);



//   *********************operations*****************

// let value =3;
// let negvalue = -value;
// console.log(negvalue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);//power
// console.log(2%2);//mod


// let str1 = "Hello";
// let str2 = " Amisha";

// let str3 = str1+ str2;
// console.log(str3);


// console.log("1"+2);//12
// console.log(1+"2");//12
// console.log("1"+"2");//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32

// console.log(+true);//1
// console.log(true+);//****error****
// console.log(+true+);//error
// console.log(+"");//0


// let num1 , num2 ,num3
// num1= num2=  num3 = 2+2 //bad prac for readablity

let gameCounter =100
gameCounter++;
console.log(gameCounter);

