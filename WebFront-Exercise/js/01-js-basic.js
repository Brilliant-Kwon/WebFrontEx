//한줄 주석
/*여러줄 주석
*/

//내장 객체 console
console.error("에러 메시지");
console.warn("경고 메시지");
console.debug("디버그 메시지");
console.log("일반 로그 메시지");
console.info("정보 메시지");

console.log("Hello, JavaScript");

//객체의 속성에 접근할 때는 . 기호를 사용하여 접근할 수 있다.
console.log(Math.PI, Math.max(1,2,3,4,5));

console.log("-----------");

//변수 할당 : let, const, (<--ES6) var
var testVar = 10; // ES6 이전 버전 : WEB 에서는 당분간 이것만 사용합시다.
let testLet = "let"; // mutable -> 재할당 가능
const testConst = "const"; //immutable -> 재할당 불가, 선언과 동시에 할당해야만 함.

testVar = "var changed";
testLet = "let changed";
// testConst = "const changed"; // error

console.log(testVar);
console.log(testLet);
console.log(testConst);

//자바 스크립트는 동적 타이핑 언어 -> 할당 시 변수 타입이 결정
var v= "String"; //<-String 으로 할당
console.log(v, typeof v); // 변수의 타입 확인
v = 2019; //number
console.log(v, typeof v);
