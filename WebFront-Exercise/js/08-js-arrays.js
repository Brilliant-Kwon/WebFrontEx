// Array
var v1 = new Array(10);//10개 짜리 배열
var v2 = new Array();//빈 배열
var v3 = new Array(1, "ABC", true); //3개짜리 배열

console.log(typeof v1, typeof v2, typeof v3); //배열 타입 확인
console.log(v1.length, v2.length, v3.length); //배열 길이 확인

//리터럴로 생성 -> 추천
var v4 = []; //빈 배열
var colors = ["red", "green", "blue", "yellow"]; //4개짜리 배열

console.log(typeof v4, typeof colors);
console.log(v4.length, colors.length);

//기본값으로 채우기
var v5 = new Array(10).fill(1); // 1로 채우기
console.log(v5);

//객체의 각 요소도 배열처럼 접근 가능 -> Map형태의 자료형으로 활용 가능
var person = {
    name: "홍길동",
    job: "도적"
};

console.log(person['name'], person['job']);

//자바 스크립트의 배열은 인덱스 체크가 엄격하지 않음
var arr = [];
console.log(arr, arr.length);

arr[10] = 10; //배열의 범위를 넘어선 곳에 삽입
console.log(arr, arr.length);

//배열 합치기 : concat
var veges = ["배추", "무", "쪽파"];
var sources = ["소금", "고춧가루", "새우젓"];
var ings = veges.concat(sources);

console.log("김장재료:" + ings);

//join : 특정 문자열 기준으로 배열 요소 합치기 -> 문자열 join
console.log(ings.join(", "), "을(를) 준비해 주세요.");

//push, pop -> stack처럼 사용 가능
var fruits = ['바나나', "오렌지", "사과", "망고"];
console.log(fruits);
fruits.push("키위");//마지막에 요소 추가
console.log("push : ", fruits);
console.log("pop : ", fruits.pop());//마지막 요소 추출
console.log("pop : ", fruits.pop());//마지막 요소 추출
console.log(fruits);

//shift with push -> Queue 처럼 사용 가능
fruits.push("수박"); // 마지막에 요소 추가
console.log("push", fruits);
console.log("shift", fruits.shift()); // 맨 앞쪽에서 요소 추출
console.log("shift", fruits.shift()); // 맨 앞쪽에서 요소 추출
console.log(fruits);

//reverse, slice
console.log("original : ", ings);
ings.reverse();// 반전
console.log("reversed : ", ings);
var sliced = ings.slice(1, 2); //잘라내기
console.log("sliced : ", sliced);
console.log("original : ", ings);
ings.sort();
console.log("sorted : ", ings);

//String.split -> 문자여를 구분자를 기준으로 배열로 전환
var str = "JavaScript is something strange";
var chunks = str.split(" ");
console.log(chunks);

for (var i = 0; i < ings.length; i++) {
    console.log("재료: ", ings[i])
}

//ES6 : forEach
ings.forEach(item => console.log(item));
//같음
ings.forEach(function (item) {
    console.log(item);
});

