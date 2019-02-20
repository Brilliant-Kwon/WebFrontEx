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

//익명함수의 활용 2. Callback 함수로 사용
//함수는 그 자체로 객체 -> 다른 함수의 매개 변수로 전달이 가능
function calcUsingCallback(val1, val2, func) { //func -> 콜백 함수
    if (typeof func == "function") {
        func(val1, val2);
    }
}

calcUsingCallback(3, 4, function (v1, v2) {
    //실제 계산 로직
    console.log(v1 + v2);
});
calcUsingCallback(3, 4, function (v1, v2) {
    //실제 계산 로직
    console.log(v1 * v2);
});

//ES6 : 화살표 표기법, 람다 =>

var f1 = function () {
    return "Hello";
};
var f1Arror = () => "Hello";

console.log(f1(), f1Arror());

f1 = function (name) {
    return "Hello, " + name;
};
f1Arror = (name) => "Hello, " + name;

console.log(f1("둘리"), f1Arror("둘리"));

calcUsingCallback(3, 4, (v1, v2) => {
    console.log(v1*v2);
});

console.log(typeof ((v1, v2) => {
    return v1+v2;
}));