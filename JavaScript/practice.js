
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

// 재사용이 가능 
// 변수 선언
let a = 2;
let b = 5;

console.log(a) // 12

// 값 ( 데이터 )의 재할당 불가! 
const a = 12;
console.log(a); // 12 // let 으로 하면 되고 const로 하면 안됨 

// 대부분 const 하고 재할당이 필요할때 let 을 사용 - var 는 사용하지 않는 것이 좋다.


// 예약어 : this, if , break 

// 함수 선언
function helloFunc(){
    //실행 코드
    console.log(1234);
}

// 함수 호출
helloFunc(); // 1234

// 함수에서 반환하고 싶을때, 반환함수
function returnFunc(){
    return 123;
}

let a = returnFunc();

console.log(a); //123

// 함수 선언! 
function sum(a,b){ // a, b 는 매개변수 
    return a+b
}

// 재사용
let a = sum(1,2); // 1과 2는 인수

console.log(a)


// 기명 (이름이 있는 )함수 - 함수 선언
function hello(){
    console.log('Hello~');
}

// 익명 (이름이 없는) 함수
// 함수 표현!
let world = function(){
    console.log('World~')
}

hello(); // Hello
world(); // World 

// 객체 데이터 
const heropy = {
    name: 'HEROPY',
    age:85,
    // 메소드 : 속성부분에 일반적인 데이터가 아닌 함수가 들어있을 경우 
    getNmae: function(){
        return this.name;  // heropy안에 있는 name에 대한 것을 의미
    }
}

const hisName = heropy.getNmae();
console.log(hisName); // HEROPY
// 혹은
console.log(heropy.getNmae()); // HEROPy


// 조건문
let isShow = true;
let checked = false;

if (isShow){  // 소괄호 사이에 조건문 입력
    console.log('Show!'); // Show
}

if (checked){ // false면 조건에 해당하는 내용 실행하지 않음 
    console.log('Checked')
}

if (isShow){
    console.log('Show!');
} else {
    console.log('Hide?');
}

// DOM API : HTML 을 제어할때 사용하는 명령 

// HTML 요소 1개 검색/찾기
let boxEl = document.querySelector('.box') // CSS 선택자를 통해서 HTML 에서 특정한 요소를 찾아서 boxEL에 넣는다.

console.log(boxEl)

// HTML 요소에 적용할 수 있는 메소드! 
boxEl.addEventListener();

// 인수(Argumnts)를 추가 가능!
boxEl.addEventListener(1,2);

// 1 - 이벤트 ( Event , 상황 ) - 클릭을하면 무엇을 할것이다! 
boxEl.addEventListener('click',2);

// 최종 !! 2 - 핸들러(Handler, 실행할 함수)
// 이벤트 이름은 다양한데, 나중에 천천히 배우면 됨 
boxEl.addEventListener('click', function(){
    console.log('Click~!')
})

// HTML 요소 1개 검색/찾기
let boxEl = document.querySelector('.box') // CSS 선택자를 통해서 HTML 에서 특정한 요소를 찾아서 boxEL에 넣는다.

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active'); // Active 라는 클래스를 추가하는 것 
let isContains = boxEL.classList.contains('active'); // active라는 함수가 있는지 체크. 있으면 True
console.log(isContains); //true

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains); // false


// 최종 !! 2 - 핸들러(Handler, 실행할 함수)
// 이벤트 이름은 다양한데, 나중에 천천히 배우면 됨 
boxEl.addEventListener('click', function(){
    console.log('Click~!');
    boxEl.classList.add('active');  // Active 라는 클래스를 추가하는 것 
    console.log(
        boxEl.classList.contains('active')
    )
    boxEl.classList.remove('active');
    console.log(
        boxEl.classList.contains('acvive')
    )
});


// HTML 요소 모두 검색/ 찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls);

// 찾은 요소들 반복해서 함수 실행!
// 익명 함수를 인수로 추가!
boxEls.forEach(function() {});  // for 구문과 비슷함 

// 첫번째 매개변수(boxEl) : 반복중인 요소 , 두번째 매개변수(index): 반복중인 번호 
boxEls.forEach(function (boxEl, index) {});

// 출력!
boxEls.forEach(function (boxEl, index){
    boxEl.classList.add(`order-${index + 1}`);
    console.log(index, boxEl)
})

// 최종
const boxEls = document.querySelectorAll('.box')

boxEls.forEach(function (boxEl, index) {
    boxEl.classList.add(`order-${index+1}`)
    console.log(index, boxEl)
})

const boxEl = document.querySelector('.box');

// Getter , 값을 얻는 용도
console.log(boxEl.textContent); // Box!!

// Setter, 값을 지정하는 용도
boxEl.textContent = 'HEROPY?!'
console.log(boxEl.textContent); // HEROPY?! -> 값자체를 box 에서 heropy로 바꿔줌 


const a = 'Hello~'
