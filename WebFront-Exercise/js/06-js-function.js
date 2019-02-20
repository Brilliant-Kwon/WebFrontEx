// function

//함수 선언식
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));

//함수 표현식 -> 익명 함수 작성
var sum = function (a, b) {
    return a + b;
};

console.log(sum(20, 30));

//함수 매개변수
function getNumberTotal() {
    //정해지지 않은 수의 매개변수를 받아
    //산술 연산 가능한 데이터만 합산
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == "number") {
            result += arguments[i];
        }
    }
    return result;
}

console.log(getNumberTotal(1, 2, 3, 4));
console.log(getNumberTotal(1, 2, "3", 4));

//익명 함수의 활용 1. 초기화 혹은 즉시 실행 함수
var initText;
(function (number) {
    var testList = ["홀수", "짝수"];  //초기화 과정에만 사용되는 변수들
    if (number % 2 == 0) {
        initText = testList[1];
    } else {
        initText = testList[0];
    }
})(5); // 5에 대해서만 수행하고 사라짐
console.log(initText);