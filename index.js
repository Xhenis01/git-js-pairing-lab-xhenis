//Code your solutions in this file

//1
const fiveToOneHundred = () => {
    for(let i = 5; i <= 100; i++){
        console.log(i);
    }
} 
    fiveToOneHundred(); 

//2
const multiplesOfThree = ()=>{
    for(let i = 3; i <= 100; i += 3){
        console.log(i);
    }
}
    multiplesOfThree(); 

//3 
 
    const multiplesOfThreeOrFive = () => {
        for(let i= 3; i <= 100; i ++){
            if(i% 3 === 0 || i% 5 === 0){
                console.log(i);
        }
    }
    }
    multiplesOfThreeOrFive();

//4
const untilNum = (num2)=> {
    for(let i = 1; i <= num2; i ++){
        console.log(i);
    }
}
    untilNum(5); 
    untilNum(9); 
    untilNum(42); 

//5
const multiply =(num1,num2) => {
    return(num1 * num2);
}
console.log(multiply(2, 4));
console.log(multiply(10, -5));
console.log(multiply(3, 7.5));

//6 
const add = (num1,num2)=> {
    if(num1 === num2){
        return 3 *(num1 + num2);
    } else {
        return num1 + num2;
    }
}
   console.log(add(2,4));
   console.log(add(10,-5));
   console.log(add(3,7.5));
   console.log(add(5,5));
   console.log(add(6,6));

//7 
const isNegative = (num1) => {
    if(num1 >= 0){
        return false;
    }else {
        return true;
    }
}
console.log(isNegative(3));
console.log(isNegative(-2));
console.log(isNegative(Math.PI));

//8
const triangleArea = (base, height)=> {
   const areaOfTriangle = (base * height)/2;
   return areaOfTriangle;

}
    console.log(triangleArea(5,7));
    console.log(triangleArea(6,8));

//9  
const betweenTwentyAndFourty = (num1) => {
    if(num1 > 20 && num1 < 40){
        return true;
    } else {
        return false;
    }
}
console.log(betweenTwentyAndFourty(4));
console.log(betweenTwentyAndFourty(21));
console.log(betweenTwentyAndFourty(99));
/*line 86 return false but on README.md 
says ture README.md is wrong*/
console.log(betweenTwentyAndFourty(101));

//10
const largest = (num1,num2,num3)=> {
    if(num1 > num2 && num1 > num3){
        return num1;
    }else if(num2 > num1 && num2 > num3){
        return num2;
    }else if(num3 > num1 && num3 > num2){
        return num3;
    }
}
console.log(largest(4,6,8));
console.log(largest(30,22,17));
console.log(largest(41,108,86));