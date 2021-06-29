
// String (문자 데이터)
// 따옴표를 사용합니다.
let myName = "HEROPY"
let email = 'thes@gmail.com'
let hello = `Hello ${myName}?!`

console.log(myName);
console.log(email);
console.log(hello); // Hello HEROPY

// Number(숫자 데이터)
// 정수 및 부동 소수점 숫자를 나타냄
let number = 123;
let opacity = 1.57;

console.log(number); // 123
console.log(opacity); // 1.57

// Boolean(블린 데이터)
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);

// Undefined : 값이 할당되지 않은 상태
let undef;
let obj = { abc: 123 };

console.log(undef); // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined

//Null : 어떤 값이 의도적으로 비어있다
let empty = null;

console.log(empty); // null

// Object( 객체 데이터 ) : 여러데이터를 key: value 형태로 저장
let user = {
    //key : value
    name: 'HEROPY',
    age: 85,
    isValid: true
};

console.log(user.name); // HEROPY
console.log(user.age); // 85
console.log(user.isValid); // true

// Array( 배열 데이터 )
// 여러 데이터를 순차적으로 저장함 
let fruits = ['Apple','Banana','Cherry']

console.log(fruits[0])
