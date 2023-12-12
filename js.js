/*let lang = "ky";

switch (lang) {
 case "ky":
    console.log("Салам!");
    break;
 case "ru":
    console.log("Привет!");
    break;
 case "en":
    console.log("hello!");
    break;

}*/

// && (и)
// || (или)
// ! (не)

/*let highInCome = true;
let goodCreditHistory = true;

if (highInCome && goodCreditHistory) {
    console.log("Мы готовы выдать кредит!");
} else {
    console.log("Извините, мы пока не выдаем кредиты!");
}*/


/*let a = 10;
let b = 3;

a += b;  //можно все арифметические добавить -, *, /
console.log(a);*/

/*let users = [
"John", 
"Mary",
"Ivan",
1, "hello",[5, 8]];
console.log(users);*/


let numbers = [1,40,5,8,3,44];
numbers.sort(function(a,b) {
    return a - b;
});
console.log(numbers);

let userName = prompt("Введите номинал банкноты");
switch (userName) {
    case "1$":
        console.log("Джордж Вашингтон");
        brake;
    case "2$":
        console.log("Томас Джефферсон");
        brake;
    case "5$":
        console.log("Авраам Линкольн");
        brake;
    case "10$":
        console.log("Александр Гамильтон");
        brake;
    case "20$":
        console.log("Эндрю Джексон");
        brake;
    case "50$":
        console.log("Улисс Грант");
        brake;
    case "100$":
        console.log("Бенджамин Франклин");
        brake;


        
}


