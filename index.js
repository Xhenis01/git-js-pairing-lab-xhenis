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

//4
const untilNum = (num2)=> {
    for(let i = 1; i <= num2; i ++){
        console.log(i)
    }
}
    untilNum(9);


//6 
const add = (num1,num2)=> {
    if(num1 === num2){
        return 3 *(num1 + num2);
    } else {
        return num1 + num2;
    }
}
   console.log(add(6,6));


//8
const triangleArea = (base, height)=> {
   const areaOfTriangle = (base * height)/2;
   return areaOfTriangle;

}
    console.log(triangleArea(6,8));

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
   console.log(largest(41,108,86));
    const multiplesOfThreeOrFive = () => {
        for(let i= 3; i <= 100; i ++){
            console.log(i)
        }
    }

    multiplesOfThreeOrFive()
