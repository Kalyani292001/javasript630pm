// for loop
// print 1 to 10 even or odd numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0){
        console.log(i)
    }
}


// using continue
for(let i=1;i<=10;i++){

    if(i%2==0){
        continue
    }else{
        console.log(i)
    }
}

for(let i=1;i<=10;i++){
    if(!(i%2==0)){
        continue
    }else{
        console.log(i)
    }
}


for (let i = 1; i <= 10; i++) {

    if (!(i % 2 == 0) ){
        console.log(i)
    }
}


for (let i = 1; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log(i)
    }
}

// while loop
// print 1 to 10 even or odd number
let i=1
while(i<=10){
if (i%2==0)
if (i%2==0)
console.log(i)
i++
}

let i1=1
while(!(i1<=10)){
if (i1%2==0)
if (i1%2==0)
console.log(i1)
i1++
}


// do while loop
// syntax
// initilization
//do(keyword){
// statements
// inc/dec
//}while(condition check)

for (let i=5;i>=1;i--){
    console.log(i)
}

let i3=1
do{
    console.log(i3)
    i3++
}
while(i3<=10)


// let i=1
// do{
//     console.log(i)
//     i++
// }while (i<=10)


// let i = 10
// do {
//     console.log(i)
//     i--
// } while (i >= 1)

// let i = 1
// do {
// if (i % 2 == 0) 
//     console.log(i)
//         i++
// }   
//  while (i <= 10)



// let i = 1
// do {
//     if (!(i % 2 == 0))
//         console.log(i)
//     i++
// } while (i <= 10)


//program 1(Guess the number)


let randumN=Math.floor(Math.randum()*6+1)
console.log(randumN)
let UserInput=prompt('Enter the any number between 1 to 6')

if (randumN==UserInput){
    console.log('Your Guess is correct')
} else{
    console.log('Your Guess is incorrect')
}

// program2

let randumN2=Math.floor(Math.randum()*6+1)
console.log(randumN2)
let UserInput2 ;
for(let i=0;i<5;i++){
    UserInput2=prompt('Enter the number between 1 to 6')
}if (randumN2==UserInput){
    console.log ('Your Guess is correct')
}else{
    console.log('Your Guess is incoorect')
}




let randumN1=math.floor(Math.random()*6+1)
console.log(randumN1)
let UserInput1;

for(let i=0;i<5;i++){
    UserInput1=prompt('Enter the number between 1 to 6')
 if (randumN1==UserInput1)
console.log('your guess is correct ')

else{
    console.log('your guess is incorrect ')
}
}

// let randomN = Math.floor(Math.random() * 6 + 1)
// console.log(randomN)
// let UserInput;
// for (let i = 0; i < 5; i++)
//     UserInput = prompt('enter the number between 1 to 6')
// if (randomN == UserInput) {
//     console.log(" your guess is correct")
// } else {
//     console.log(" your guess is  incorrect")

//}


// program4

let randomN4=Math.floor(Math.random()*6+1)
console.log(randomN)
let UserInput4;
console.log(UserInput4)

while(randomN4!=UserInput4){
    UserInput=prompt('enter the number between 1 to 6')
    if (randomN4==UserInput4){
    console.log("your guess is correct")
}
    else
    {
        console.log("your guess is incorrect")
    }

}


// let randomN = Math.floor(Math.random() * 6 + 1)
// console.log(randomN)
// let UserInput;
// console.log(UserInput)

// while (UserInput != randomN) {
//     UserInput = prompt('enter the number between 1 to 6')
//     if (randomN == UserInput) {
//         console.log("guess is correct")
//     } else {
//         console.log("guess is incorrect")
//     }
// }

// for loop

// let randomN = Math.floor(Math.random() * 6 + 1)
// console.log(randomN)
// let UserInput;

// for (let i = 0; i < 5; i++) {
//     UserInput = prompt("enter the number beetween 0 to 6")
//     if (randomN == UserInput) {
//         console.log("guess is correct")
//         break;
//     } else {
//         console.log("your guess is incorrect")
//     }
//}


// while loop
// let randomN2 = Math.floor(Math.random() * 6 + 1)
// console.log(randomN2)
// let UserInput2;

// while(randomN2!=UserInput2){
//     UserInput2=prompt("enter the number beetween 0 to 6")
//     if (randomN2==UserInput2) {
//         console.log("guess is correct")
//         break;
//     }else {
//         console.log("your guess is incorrect")
//     }
// }















































